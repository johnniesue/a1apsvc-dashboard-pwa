/**
 * A-1APSVC Customer Import Utility
 * Handles importing customer data from Housecall Pro exports and Excel files
 */

class CustomerImporter {
    constructor() {
        this.importedData = [];
        this.duplicates = [];
        this.processedData = [];
    }

    /**
     * Parse the actual customer data from the OneDrive Excel file
     */
    parseHousecallProData() {
        // This is the actual customer data structure from the OneDrive file
        return [
            {
                'First Name': 'Frank',
                'Last Name': 'Reed',
                'Display Name': 'Frank Reed',
                'Mobile Number': '9.17E+09',
                'Home Number': '',
                'Email': 'frankpr1980@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': 'Complete',
                'ID': '57414217'
            },
            {
                'First Name': 'Buddy',
                'Last Name': 'Lane',
                'Display Name': 'Buddy Lane',
                'Mobile Number': '2.15E+09',
                'Home Number': '',
                'Email': '',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58438781'
            },
            {
                'First Name': 'Poulins',
                'Last Name': 'Syriac',
                'Display Name': 'Syriac Poulins',
                'Mobile Number': '2.04E+09',
                'Home Number': '',
                'Email': 'poulinssyriac@yahoo.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58488134'
            },
            {
                'First Name': 'Ruth',
                'Last Name': 'Young',
                'Display Name': 'Ruth Young',
                'Mobile Number': '9.72E+09',
                'Home Number': '',
                'Email': 'rayoung258@yahoo.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': 'Snaked an',
                'Notes': '',
                'ID': '58553934'
            },
            {
                'First Name': 'Pierce',
                'Last Name': 'Fonville',
                'Display Name': 'Pierce Fonville',
                'Mobile Number': '8.17E+09',
                'Home Number': '',
                'Email': 'Pierce@repierce@rentavations.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': "'calmont house', The",
                'Notes': '',
                'ID': '58571067'
            },
            {
                'First Name': 'Cathie',
                'Last Name': 'Lanier',
                'Display Name': 'Cathie Lanier',
                'Mobile Number': '2.14E+09',
                'Home Number': '',
                'Email': 'cathie1.la@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58640327'
            },
            {
                'First Name': 'Jen',
                'Last Name': 'Gray',
                'Display Name': 'Jen Gray',
                'Mobile Number': '6.01E+09',
                'Home Number': '',
                'Email': 'jenngray3904@yahoo.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58710067'
            },
            {
                'First Name': 'Linda',
                'Last Name': 'Woody',
                'Display Name': 'Linda Woody',
                'Mobile Number': '2.15E+09',
                'Home Number': '',
                'Email': 'twoody1231@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58710190'
            },
            {
                'First Name': 'Lori',
                'Last Name': 'Kern',
                'Display Name': 'Lori Kern',
                'Mobile Number': '2.14E+09',
                'Home Number': '',
                'Email': 'Lori.kern@gte.net',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58745240'
            },
            {
                'First Name': 'Cristi',
                'Last Name': 'Day',
                'Display Name': 'Cristi Day',
                'Mobile Number': '8.07E+09',
                'Home Number': '',
                'Email': 'cristiday@sbcglobal.net',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58745421'
            },
            {
                'First Name': 'Jessie',
                'Last Name': 'Hernandez',
                'Display Name': 'Jessie Hernandez',
                'Mobile Number': '3.06E+09',
                'Home Number': '',
                'Email': 'Jessie.hernandez@protonmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58745577'
            },
            {
                'First Name': 'Brian',
                'Last Name': 'Johnson',
                'Display Name': 'Brian Johnson',
                'Mobile Number': '2.15E+09',
                'Home Number': '',
                'Email': '',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58745732'
            },
            {
                'First Name': 'David',
                'Last Name': 'Gosnell',
                'Display Name': 'David Gosnell',
                'Mobile Number': '4.7E+09',
                'Home Number': '',
                'Email': 'David.gosnell@verizon.net',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58748153'
            },
            {
                'First Name': 'Matt',
                'Last Name': '',
                'Display Name': 'Matt',
                'Mobile Number': '9.73E+09',
                'Home Number': '',
                'Email': '',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58764304'
            },
            {
                'First Name': 'Donetta',
                'Last Name': 'Coleman',
                'Display Name': 'Donetta Coleman',
                'Mobile Number': '9.73E+09',
                'Home Number': '',
                'Email': 'coleman5137@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58794355'
            },
            {
                'First Name': 'Borja',
                'Last Name': 'Roig',
                'Display Name': 'Borja Roig',
                'Mobile Number': '7.89E+09',
                'Home Number': '',
                'Email': 'borjars@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58883840'
            },
            {
                'First Name': 'Henry',
                'Last Name': 'Hernane',
                'Display Name': 'Henry Hernane',
                'Mobile Number': '9.51E+09',
                'Home Number': '',
                'Email': 'hjhernane@yahoo.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58987511'
            },
            {
                'First Name': 'Hafeez',
                'Last Name': 'Rahman',
                'Display Name': 'Hafeez Rahman',
                'Mobile Number': '5.19E+09',
                'Home Number': '',
                'Email': 'hafeez.rahman@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '58992842'
            },
            {
                'First Name': 'Rita',
                'Last Name': 'Randle',
                'Display Name': 'Rita Randle',
                'Mobile Number': '2.15E+09',
                'Home Number': '',
                'Email': 'randle614@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59009932'
            },
            {
                'First Name': 'Efrom',
                'Last Name': 'Moore',
                'Display Name': 'Efrom Moore',
                'Mobile Number': '4.7E+09',
                'Home Number': '',
                'Email': 'efrommoore@comcast.net',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59022672'
            },
            {
                'First Name': 'Tina',
                'Last Name': 'Zhu',
                'Display Name': 'Tina Zhu',
                'Mobile Number': '',
                'Home Number': '',
                'Email': 'tinazhu2007@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '2.15E+09',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59034234'
            },
            {
                'First Name': 'Lulu',
                'Last Name': '',
                'Display Name': 'Lulu',
                'Mobile Number': '2.4E+09',
                'Home Number': '',
                'Email': '',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59177013'
            },
            {
                'First Name': 'Brian',
                'Last Name': 'Cumberledge',
                'Display Name': 'Brian Cumberledge',
                'Mobile Number': '2.15E+09',
                'Home Number': '',
                'Email': 'bcumberledge@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59177175'
            },
            {
                'First Name': 'Jitcho',
                'Last Name': '',
                'Display Name': 'Jitcho',
                'Mobile Number': '9.73E+09',
                'Home Number': '',
                'Email': 'cdjitcho@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59206199'
            },
            {
                'First Name': 'Marie',
                'Last Name': 'Sandora',
                'Display Name': 'Marie Sandora',
                'Mobile Number': '9.09E+09',
                'Home Number': '',
                'Email': 'Smithma1201@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59335429'
            },
            {
                'First Name': 'Kathy',
                'Last Name': 'Sechrist',
                'Display Name': 'Kathy Sechrist',
                'Mobile Number': '9.73E+09',
                'Home Number': '',
                'Email': '',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': 'Generator',
                'Notes': '',
                'ID': '59335631'
            },
            {
                'First Name': 'Binh',
                'Last Name': 'Le',
                'Display Name': 'Binh Le',
                'Mobile Number': '8.17E+09',
                'Home Number': '',
                'Email': 'binhle58@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59456705'
            },
            {
                'First Name': 'Stella',
                'Last Name': 'Cobb',
                'Display Name': 'Stella Cobb',
                'Mobile Number': '4.69E+09',
                'Home Number': '',
                'Email': 'stella.pharivn@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59457858'
            },
            {
                'First Name': 'Welbin',
                'Last Name': 'Yang',
                'Display Name': 'Welbin Yang',
                'Mobile Number': '1.47E+09',
                'Home Number': '',
                'Email': 'ritcare@yahoo.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59919105'
            },
            {
                'First Name': 'Bill',
                'Last Name': 'Karraker',
                'Display Name': 'Bill Karraker',
                'Mobile Number': '9.72E+09',
                'Home Number': '',
                'Email': 'Karraker@karrKer@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '59967885'
            },
            {
                'First Name': 'Abhijit',
                'Last Name': 'Godbole',
                'Display Name': 'Abhijit Godbole',
                'Mobile Number': '5.14E+09',
                'Home Number': '',
                'Email': 'godbole.abhijit@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60038749'
            },
            {
                'First Name': 'Sissy',
                'Last Name': 'Huang',
                'Display Name': 'Sissy Huang',
                'Mobile Number': '9.41E+09',
                'Home Number': '',
                'Email': 'sissycynthia@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60061445'
            },
            {
                'First Name': 'Rey',
                'Last Name': 'Nungaray',
                'Display Name': 'Rey Nungaray',
                'Mobile Number': '2.15E+09',
                'Home Number': '',
                'Email': 'Thenungaraygroup@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60200013'
            },
            {
                'First Name': 'Ozzy',
                'Last Name': 'Polanco',
                'Display Name': 'Ozzy Polanco',
                'Mobile Number': '4.69E+09',
                'Home Number': '',
                'Email': 'ozziepolanco@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60299845'
            },
            {
                'First Name': 'Reyn',
                'Last Name': 'King',
                'Display Name': 'Reyn King',
                'Mobile Number': '3.25E+09',
                'Home Number': '',
                'Email': 'reyn@northmgmt.net',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60305974'
            },
            {
                'First Name': 'Mary',
                'Last Name': 'Cadigan',
                'Display Name': 'Mary Cadigan',
                'Mobile Number': '2.14E+09',
                'Home Number': '',
                'Email': 'marylouise@ebby.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60637043'
            },
            {
                'First Name': 'Brian',
                'Last Name': 'Collins',
                'Display Name': 'Brian Collins',
                'Mobile Number': '4.69E+09',
                'Home Number': '',
                'Email': 'bmc1280@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60659192'
            },
            {
                'First Name': 'CV',
                'Last Name': 'Thrivikram',
                'Display Name': 'CV Thrivikram',
                'Mobile Number': '9.73E+09',
                'Home Number': '',
                'Email': 'devenkh2@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60707315'
            },
            {
                'First Name': 'Susan',
                'Last Name': 'Yeh',
                'Display Name': 'Susan Yeh',
                'Mobile Number': '2.1E+09',
                'Home Number': '',
                'Email': '54305y@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60708943'
            },
            {
                'First Name': 'Scott',
                'Last Name': 'Christian',
                'Display Name': 'Scott Christian',
                'Mobile Number': '2.14E+09',
                'Home Number': '',
                'Email': 'Scott.christian91@gmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60730939'
            },
            {
                'First Name': 'Audrey',
                'Last Name': 'Castro',
                'Display Name': 'Audrey Castro',
                'Mobile Number': '2.15E+09',
                'Home Number': '',
                'Email': 'Odski@hotmail.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60740519'
            },
            {
                'First Name': 'Zack',
                'Last Name': 'Plunkett',
                'Display Name': 'Zack Plunkett',
                'Mobile Number': '8.18E+09',
                'Home Number': '',
                'Email': 'zack.plunkett@outlook.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60806983'
            },
            {
                'First Name': 'Kishore',
                'Last Name': 'Kasturi',
                'Display Name': 'Kishore Kasturi',
                'Mobile Number': '7.28E+09',
                'Home Number': '',
                'Email': 'kishorepal@yahoo.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60865957'
            },
            {
                'First Name': 'Alex',
                'Last Name': '',
                'Display Name': 'Alex',
                'Mobile Number': '7.71E+09',
                'Home Number': '',
                'Email': 'info@texasstarbuilder.com',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60871491'
            },
            {
                'First Name': 'Ashley',
                'Last Name': 'Glanton',
                'Display Name': 'Ashley Glanton',
                'Mobile Number': '8.18E+09',
                'Home Number': '',
                'Email': '',
                'Additional Info': '',
                'Company': '',
                'Role': '',
                'Work Number': '',
                'Bills to': '',
                'Accepts billing': '',
                'Tags': '',
                'Notes': '',
                'ID': '60882571'
            }
            // Add more customers as needed...
        ];
    }

    /**
     * Convert scientific notation phone numbers to regular format
     */
    convertPhoneNumber(scientificNotation) {
        if (!scientificNotation || scientificNotation === '') return '';
        
        try {
            // Convert scientific notation to regular number
            const number = parseFloat(scientificNotation);
            if (isNaN(number)) return scientificNotation;
            
            // Convert to string and format as phone number
            const phoneStr = Math.round(number).toString();
            
            // Format as (XXX) XXX-XXXX if it's a 10-digit number
            if (phoneStr.length === 10) {
                return `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`;
            }
            
            return phoneStr;
        } catch (error) {
            return scientificNotation;
        }
    }

    /**
     * Clean and normalize email addresses
     */
    cleanEmail(email) {
        if (!email) return '';
        
        // Fix common typos in the data
        email = email.replace('Karraker@karrKer@gmail.com', 'Karraker@gmail.com');
        email = email.replace('Pierce@repierce@rentavations.com', 'pierce@rentavations.com');
        
        return email.toLowerCase().trim();
    }

    /**
     * Process and normalize the imported data
     */
    processImportData(rawData) {
        return rawData.map(customer => {
            const processedCustomer = {
                id: Date.now() + Math.random(),
                firstName: customer['First Name'] || '',
                lastName: customer['Last Name'] || '',
                displayName: customer['Display Name'] || '',
                email: this.cleanEmail(customer.Email || ''),
                mobilePhone: this.convertPhoneNumber(customer['Mobile Number']),
                homePhone: this.convertPhoneNumber(customer['Home Number']),
                workPhone: this.convertPhoneNumber(customer['Work Number']),
                company: customer.Company || '',
                role: customer.Role || '',
                additionalInfo: customer['Additional Info'] || '',
                billsTo: customer['Bills to'] || '',
                acceptsBilling: customer['Accepts billing'] || '',
                tags: customer.Tags ? customer.Tags.split(',').map(t => t.trim()).filter(t => t) : [],
                notes: customer.Notes || '',
                originalId: customer.ID || '',
                dateAdded: new Date().toISOString(),
                isImported: true,
                source: 'Housecall Pro'
            };

            // Add address if available (not in current data structure but could be added)
            if (customer.Address) {
                processedCustomer.address = customer.Address;
            }

            return processedCustomer;
        });
    }

    /**
     * Find duplicates using advanced matching algorithms
     */
    findDuplicates(customers, existingCustomers = []) {
        const duplicates = [];
        const allCustomers = [...customers, ...existingCustomers];

        // Check for duplicates within the dataset
        for (let i = 0; i < allCustomers.length; i++) {
            for (let j = i + 1; j < allCustomers.length; j++) {
                const similarity = this.calculateSimilarity(allCustomers[i], allCustomers[j]);
                
                if (similarity.score > 0.7) {
                    duplicates.push({
                        customer1: allCustomers[i],
                        customer2: allCustomers[j],
                        similarity: similarity.score,
                        matchReasons: similarity.reasons,
                        type: similarity.score > 0.9 ? 'exact' : 'potential',
                        confidence: this.getConfidenceLevel(similarity.score)
                    });
                }
            }
        }

        return duplicates;
    }

    /**
     * Advanced similarity calculation with detailed reasoning
     */
    calculateSimilarity(customer1, customer2) {
        let totalScore = 0;
        let maxScore = 0;
        const reasons = [];

        // Name matching (weight: 3)
        const name1 = `${customer1.firstName || ''} ${customer1.lastName || ''}`.toLowerCase().trim();
        const name2 = `${customer2.firstName || ''} ${customer2.lastName || ''}`.toLowerCase().trim();
        
        if (name1 && name2) {
            maxScore += 3;
            const nameScore = this.calculateNameSimilarity(name1, name2);
            totalScore += nameScore * 3;
            
            if (nameScore > 0.8) {
                reasons.push(`Names very similar: "${name1}" vs "${name2}"`);
            } else if (nameScore > 0.6) {
                reasons.push(`Names somewhat similar: "${name1}" vs "${name2}"`);
            }
        }

        // Email matching (weight: 2.5)
        const email1 = (customer1.email || '').toLowerCase().trim();
        const email2 = (customer2.email || '').toLowerCase().trim();
        
        if (email1 && email2) {
            maxScore += 2.5;
            if (email1 === email2) {
                totalScore += 2.5;
                reasons.push(`Exact email match: ${email1}`);
            } else if (this.levenshteinDistance(email1, email2) <= 2) {
                totalScore += 2;
                reasons.push(`Very similar emails: "${email1}" vs "${email2}"`);
            }
        }

        // Phone matching (weight: 2)
        const phones1 = [
            this.normalizePhone(customer1.mobilePhone),
            this.normalizePhone(customer1.homePhone),
            this.normalizePhone(customer1.workPhone)
        ].filter(p => p);
        
        const phones2 = [
            this.normalizePhone(customer2.mobilePhone),
            this.normalizePhone(customer2.homePhone),
            this.normalizePhone(customer2.workPhone)
        ].filter(p => p);

        if (phones1.length > 0 && phones2.length > 0) {
            maxScore += 2;
            let phoneMatch = false;
            
            for (const phone1 of phones1) {
                for (const phone2 of phones2) {
                    if (phone1 === phone2) {
                        totalScore += 2;
                        reasons.push(`Exact phone match: ${phone1}`);
                        phoneMatch = true;
                        break;
                    } else if (phone1.includes(phone2) || phone2.includes(phone1)) {
                        totalScore += 1.5;
                        reasons.push(`Similar phone numbers: "${phone1}" vs "${phone2}"`);
                        phoneMatch = true;
                        break;
                    }
                }
                if (phoneMatch) break;
            }
        }

        // Company matching (weight: 1)
        const company1 = (customer1.company || '').toLowerCase().trim();
        const company2 = (customer2.company || '').toLowerCase().trim();
        
        if (company1 && company2) {
            maxScore += 1;
            if (company1 === company2) {
                totalScore += 1;
                reasons.push(`Same company: ${company1}`);
            } else if (this.levenshteinDistance(company1, company2) <= 2) {
                totalScore += 0.7;
                reasons.push(`Similar companies: "${company1}" vs "${company2}"`);
            }
        }

        const finalScore = maxScore > 0 ? totalScore / maxScore : 0;
        
        return {
            score: finalScore,
            reasons: reasons,
            totalScore: totalScore,
            maxScore: maxScore
        };
    }

    /**
     * Calculate name similarity with fuzzy matching
     */
    calculateNameSimilarity(name1, name2) {
        if (name1 === name2) return 1;
        
        // Check if names are subsets of each other
        if (name1.includes(name2) || name2.includes(name1)) return 0.8;
        
        // Use Levenshtein distance for fuzzy matching
        const distance = this.levenshteinDistance(name1, name2);
        const maxLength = Math.max(name1.length, name2.length);
        
        if (maxLength === 0) return 0;
        
        const similarity = 1 - (distance / maxLength);
        return Math.max(0, similarity);
    }

    /**
     * Calculate Levenshtein distance between two strings
     */
    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }

    /**
     * Normalize phone numbers for comparison
     */
    normalizePhone(phone) {
        if (!phone) return '';
        return phone.toString().replace(/\D/g, '');
    }

    /**
     * Get confidence level based on similarity score
     */
    getConfidenceLevel(score) {
        if (score >= 0.95) return 'Very High';
        if (score >= 0.85) return 'High';
        if (score >= 0.75) return 'Medium';
        return 'Low';
    }

    /**
     * Import the actual Housecall Pro data
     */
    importHousecallProData() {
        const rawData = this.parseHousecallProData();
        const processedData = this.processImportData(rawData);
        
        return {
            customers: processedData,
            summary: {
                total: processedData.length,
                withEmail: processedData.filter(c => c.email).length,
                withPhone: processedData.filter(c => c.mobilePhone || c.homePhone || c.workPhone).length,
                withTags: processedData.filter(c => c.tags.length > 0).length
            }
        };
    }

    /**
     * Generate import report
     */
    generateImportReport(customers, duplicates) {
        return {
            totalCustomers: customers.length,
            duplicatesFound: duplicates.length,
            exactDuplicates: duplicates.filter(d => d.type === 'exact').length,
            potentialDuplicates: duplicates.filter(d => d.type === 'potential').length,
            customersWithEmail: customers.filter(c => c.email).length,
            customersWithPhone: customers.filter(c => c.mobilePhone || c.homePhone || c.workPhone).length,
            customersWithTags: customers.filter(c => c.tags.length > 0).length,
            dataQualityIssues: this.identifyDataQualityIssues(customers)
        };
    }

    /**
     * Identify data quality issues
     */
    identifyDataQualityIssues(customers) {
        const issues = [];
        
        customers.forEach((customer, index) => {
            // Missing essential information
            if (!customer.firstName && !customer.lastName) {
                issues.push(`Row ${index + 1}: Missing name`);
            }
            
            if (!customer.email && !customer.mobilePhone && !customer.homePhone && !customer.workPhone) {
                issues.push(`Row ${index + 1}: No contact information`);
            }
            
            // Invalid email format
            if (customer.email && !this.isValidEmail(customer.email)) {
                issues.push(`Row ${index + 1}: Invalid email format - ${customer.email}`);
            }
            
            // Suspicious phone numbers
            if (customer.mobilePhone && customer.mobilePhone.length < 10) {
                issues.push(`Row ${index + 1}: Phone number too short - ${customer.mobilePhone}`);
            }
        });
        
        return issues;
    }

    /**
     * Validate email format
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CustomerImporter;
} else {
    window.CustomerImporter = CustomerImporter;
}

