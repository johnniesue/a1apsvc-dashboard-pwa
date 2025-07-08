/**
 * A-1APSVC Technician Management System
 * Handles technician data, status tracking, and appointment assignments
 */

class TechnicianManager {
    constructor() {
        this.technicians = this.loadTechnicians();
        this.techStatus = this.loadTechStatus();
        this.init();
    }

    init() {
        this.updateTechnicianDisplay();
        this.startStatusTracking();
    }

    loadTechnicians() {
        // Pre-defined technician data for A-1APSVC
        return [
            {
                id: 'chris',
                firstName: 'Chris',
                lastName: 'Crabtree',
                fullName: 'Chris Crabtree',
                title: 'Master Plumber',
                license: 'M-43801',
                phone: '(469) 900-5194',
                email: 'chris@a-1apsvc.com',
                avatar: 'CC',
                color: '#4299e1',
                skills: ['Water Heater Installation', 'Slab Leak Repair', 'Gas Line Services', 'Emergency Repairs'],
                experience: '30+ years',
                status: 'available',
                currentLocation: '',
                lastUpdate: new Date().toISOString()
            },
            {
                id: 'kian',
                firstName: 'Kian',
                lastName: 'Crabtree',
                fullName: 'Kian Crabtree',
                title: 'Apprentice Plumber',
                license: 'Apprentice',
                phone: '(469) 900-5194',
                email: 'kian@a-1apsvc.com',
                avatar: 'KC',
                color: '#ed8936',
                skills: ['Drain Cleaning', 'Fixture Installation', 'Leak Repair', 'Maintenance'],
                experience: '2+ years',
                status: 'available',
                currentLocation: '',
                lastUpdate: new Date().toISOString()
            }
        ];
    }

    loadTechStatus() {
        const saved = localStorage.getItem('a1apsvc-tech-status');
        if (saved) {
            return JSON.parse(saved);
        }
        
        // Default status for both technicians
        return {
            chris: {
                status: 'available',
                currentAppointment: null,
                location: 'Lucas, TX',
                lastUpdate: new Date().toISOString(),
                todayStats: {
                    appointmentsCompleted: 0,
                    hoursWorked: 0,
                    revenue: 0
                }
            },
            kian: {
                status: 'available',
                currentAppointment: null,
                location: 'Lucas, TX',
                lastUpdate: new Date().toISOString(),
                todayStats: {
                    appointmentsCompleted: 0,
                    hoursWorked: 0,
                    revenue: 0
                }
            }
        };
    }

    saveTechStatus() {
        localStorage.setItem('a1apsvc-tech-status', JSON.stringify(this.techStatus));
    }

    updateTechnicianStatus(techId, status, appointmentId = null, location = '') {
        if (!this.techStatus[techId]) return false;

        this.techStatus[techId].status = status;
        this.techStatus[techId].currentAppointment = appointmentId;
        this.techStatus[techId].lastUpdate = new Date().toISOString();
        
        if (location) {
            this.techStatus[techId].location = location;
        }

        this.saveTechStatus();
        this.updateTechnicianDisplay();
        this.notifyStatusChange(techId, status);
        
        return true;
    }

    getTechnicianStatus(techId) {
        return this.techStatus[techId] || null;
    }

    getAllTechnicians() {
        return this.technicians;
    }

    getTechnicianById(techId) {
        return this.technicians.find(tech => tech.id === techId);
    }

    getAvailableTechnicians() {
        return this.technicians.filter(tech => 
            this.techStatus[tech.id]?.status === 'available'
        );
    }

    assignAppointment(techId, appointmentId, appointmentData) {
        if (!this.techStatus[techId]) return false;

        this.updateTechnicianStatus(techId, 'scheduled', appointmentId);
        
        // Update appointment with technician assignment
        if (typeof window.schedulingManager !== 'undefined') {
            window.schedulingManager.assignTechnician(appointmentId, techId);
        }

        return true;
    }

    completeAppointment(techId, appointmentId, duration = 2, revenue = 400) {
        if (!this.techStatus[techId]) return false;

        // Update stats
        this.techStatus[techId].todayStats.appointmentsCompleted++;
        this.techStatus[techId].todayStats.hoursWorked += duration;
        this.techStatus[techId].todayStats.revenue += revenue;

        // Reset status to available
        this.updateTechnicianStatus(techId, 'available', null);

        return true;
    }

    updateTechnicianDisplay() {
        // Update technician cards if they exist on the page
        this.technicians.forEach(tech => {
            this.updateTechCard(tech);
        });
    }

    updateTechCard(tech) {
        const statusElement = document.getElementById(`${tech.id}-status`);
        const appointmentsElement = document.getElementById(`${tech.id}-appointments`);
        
        if (!statusElement) return;

        const status = this.techStatus[tech.id];
        const statusText = this.getStatusDisplayText(tech.id);
        const statusColor = this.getStatusColor(status.status);

        statusElement.textContent = statusText;
        statusElement.style.color = statusColor;

        // Update appointments display if element exists
        if (appointmentsElement && typeof window.schedulingManager !== 'undefined') {
            this.renderTechAppointments(tech.id, appointmentsElement);
        }
    }

    getStatusDisplayText(techId) {
        const status = this.techStatus[techId];
        if (!status) return 'Unknown';

        switch (status.status) {
            case 'available':
                return 'Available';
            case 'scheduled':
                return 'Scheduled';
            case 'en-route':
                if (status.currentAppointment && typeof window.schedulingManager !== 'undefined') {
                    const appointment = window.schedulingManager.getAppointmentById(status.currentAppointment);
                    return appointment ? `En Route - ${appointment.customerName}` : 'En Route';
                }
                return 'En Route';
            case 'in-progress':
                if (status.currentAppointment && typeof window.schedulingManager !== 'undefined') {
                    const appointment = window.schedulingManager.getAppointmentById(status.currentAppointment);
                    return appointment ? `Working - ${appointment.customerName}` : 'Working';
                }
                return 'Working';
            case 'completed':
                return 'Job Completed';
            case 'off-duty':
                return 'Off Duty';
            default:
                return status.status;
        }
    }

    getStatusColor(status) {
        const colorMap = {
            'available': '#48bb78',
            'scheduled': '#4299e1',
            'en-route': '#9f7aea',
            'in-progress': '#ed8936',
            'completed': '#38a169',
            'off-duty': '#a0aec0'
        };
        return colorMap[status] || '#4a5568';
    }

    renderTechAppointments(techId, container) {
        if (typeof window.schedulingManager === 'undefined') return;

        const today = new Date().toISOString().split('T')[0];
        const techAppointments = window.schedulingManager.appointments.filter(apt => 
            apt.technician === techId && apt.date >= today
        ).sort((a, b) => {
            if (a.date === b.date) {
                return a.time.localeCompare(b.time);
            }
            return a.date.localeCompare(b.date);
        });

        container.innerHTML = '';

        if (techAppointments.length === 0) {
            container.innerHTML = '<p style="color: #a0aec0; text-align: center; padding: 1rem;">No upcoming appointments</p>';
            return;
        }

        techAppointments.forEach(apt => {
            const aptElement = document.createElement('div');
            aptElement.className = 'tech-appointment';
            aptElement.innerHTML = `
                <div class="appointment-time">${this.formatDate(apt.date)} at ${apt.time}</div>
                <div class="appointment-customer">${apt.customerName}</div>
                <div style="font-size: 0.8rem; color: #64748b; margin: 0.25rem 0;">
                    ${apt.serviceType} - ${apt.duration}h
                    ${apt.address ? `<br>📍 ${apt.address}` : ''}
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                    <span class="appointment-status status-${apt.status}">${this.formatStatus(apt.status)}</span>
                    <div style="display: flex; gap: 0.25rem;">
                        ${this.getStatusButtons(apt)}
                    </div>
                </div>
            `;
            container.appendChild(aptElement);
        });
    }

    getStatusButtons(appointment) {
        const buttons = [];
        
        switch (appointment.status) {
            case 'scheduled':
                buttons.push(`
                    <button class="btn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; background: #9f7aea; color: white;" 
                            onclick="technicianManager.updateAppointmentStatus('${appointment.id}', 'en-route')">
                        🚗 En Route
                    </button>
                `);
                break;
            case 'en-route':
                buttons.push(`
                    <button class="btn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; background: #ed8936; color: white;" 
                            onclick="technicianManager.updateAppointmentStatus('${appointment.id}', 'in-progress')">
                        🔧 Start Job
                    </button>
                `);
                break;
            case 'in-progress':
                buttons.push(`
                    <button class="btn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; background: #48bb78; color: white;" 
                            onclick="technicianManager.completeAppointmentWithDetails('${appointment.id}')">
                        ✅ Complete
                    </button>
                `);
                break;
        }

        return buttons.join('');
    }

    updateAppointmentStatus(appointmentId, newStatus) {
        if (typeof window.schedulingManager === 'undefined') return;

        const appointment = window.schedulingManager.getAppointmentById(appointmentId);
        if (!appointment) return;

        // Update appointment status
        window.schedulingManager.updateAppointmentStatus(appointmentId, newStatus);

        // Update technician status
        if (appointment.technician) {
            this.updateTechnicianStatus(appointment.technician, newStatus, appointmentId);
        }

        // Refresh displays
        this.updateTechnicianDisplay();
        if (typeof window.schedulingManager.renderCalendar === 'function') {
            window.schedulingManager.renderCalendar();
            window.schedulingManager.renderTechnicianAppointments();
        }
    }

    completeAppointmentWithDetails(appointmentId) {
        if (typeof window.schedulingManager === 'undefined') return;

        const appointment = window.schedulingManager.getAppointmentById(appointmentId);
        if (!appointment) return;

        // Show completion modal or use default values
        const duration = appointment.duration || 2;
        const revenue = duration * 200; // $200 per hour

        // Update appointment status
        window.schedulingManager.updateAppointmentStatus(appointmentId, 'completed');

        // Update technician stats
        if (appointment.technician) {
            this.completeAppointment(appointment.technician, appointmentId, duration, revenue);
        }

        // Show success message
        this.showNotification(`Job completed for ${appointment.customerName}! +$${revenue}`, 'success');
    }

    startStatusTracking() {
        // Update technician status every 30 seconds
        setInterval(() => {
            this.updateTechnicianDisplay();
        }, 30000);
    }

    notifyStatusChange(techId, status) {
        const tech = this.getTechnicianById(techId);
        if (!tech) return;

        const message = `${tech.fullName} status updated to: ${this.getStatusDisplayText(techId)}`;
        this.showNotification(message, 'info');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            max-width: 300px;
            font-weight: 500;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = message;

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Utility methods
    formatDate(dateString) {
        const date = new Date(dateString + 'T00:00:00');
        return new Intl.DateTimeFormat('en-US', { 
            weekday: 'short',
            month: 'short', 
            day: 'numeric' 
        }).format(date);
    }

    formatStatus(status) {
        const statusMap = {
            'scheduled': 'Scheduled',
            'en-route': 'En Route',
            'in-progress': 'In Progress',
            'completed': 'Completed'
        };
        return statusMap[status] || status;
    }

    // Mobile interface methods
    showMobileTechPanel() {
        const panel = document.getElementById('mobileTechPanel');
        if (panel) {
            panel.classList.add('show');
        }
    }

    hideMobileTechPanel() {
        const panel = document.getElementById('mobileTechPanel');
        if (panel) {
            panel.classList.remove('show');
        }
    }

    // Export data for reporting
    getTechnicianStats(techId, date = null) {
        const targetDate = date || new Date().toISOString().split('T')[0];
        const status = this.techStatus[techId];
        
        if (!status) return null;

        return {
            technician: this.getTechnicianById(techId),
            status: status.status,
            location: status.location,
            todayStats: status.todayStats,
            lastUpdate: status.lastUpdate
        };
    }

    getAllTechnicianStats(date = null) {
        return this.technicians.map(tech => 
            this.getTechnicianStats(tech.id, date)
        ).filter(stats => stats !== null);
    }
}

// Initialize technician manager when DOM is loaded
let technicianManager;

document.addEventListener('DOMContentLoaded', function() {
    technicianManager = new TechnicianManager();
    
    // Make it globally available
    window.technicianManager = technicianManager;
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TechnicianManager;
}

