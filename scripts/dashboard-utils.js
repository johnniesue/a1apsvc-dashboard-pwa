async function getCustomerInsights(customerId) {
  const db = firebase.firestore();
  const insights = {
    totalJobs: 0,
    totalInvoices: 0,
    lifetimeSpend: 0,
    lastServiceDate: null,
    jobTypes: {},
    recurringIssues: [],
    suggestions: []
  };

  const jobsSnapshot = await db.collection('jobs')
    .where('customerId', '==', customerId)
    .get();

  insights.totalJobs = jobsSnapshot.size;
  jobsSnapshot.forEach(doc => {
    const job = doc.data();
    const jobType = job.type || 'Unknown';
    const jobDate = job.date ? new Date(job.date) : null;
    insights.jobTypes[jobType] = (insights.jobTypes[jobType] || 0) + 1;
    if (!insights.lastServiceDate || jobDate > insights.lastServiceDate) {
      insights.lastServiceDate = jobDate;
    }
    if (job.notes && job.notes.toLowerCase().includes('leak')) {
      insights.recurringIssues.push(job);
    }
  });

  const invoicesSnapshot = await db.collection('invoices')
    .where('customerId', '==', customerId)
    .get();

  insights.totalInvoices = invoicesSnapshot.size;
  invoicesSnapshot.forEach(doc => {
    const invoice = doc.data();
    insights.lifetimeSpend += invoice.total || 0;
  });

  const now = new Date();
  const daysSinceLastService = insights.lastServiceDate
    ? Math.floor((now - insights.lastServiceDate) / (1000 * 60 * 60 * 24))
    : null;

  if (insights.recurringIssues.length >= 3) {
    insights.suggestions.push("Recurring leak issue – consider upsell");
  }
  if (daysSinceLastService && daysSinceLastService > 90) {
    insights.suggestions.push("Customer due for follow-up");
  }

  return insights;
}
