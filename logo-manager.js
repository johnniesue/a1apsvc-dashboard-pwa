/**
 * A-1APSVC Logo Manager
 * Handles logo display and management across all PWA pages
 */

class LogoManager {
    constructor() {
        this.storageKey = 'a1apsvc-logo';
        this.init();
    }

    init() {
        // Load logo when page loads
        window.addEventListener('load', () => {
            this.loadSavedLogo();
        });

        // Set up logo upload functionality if upload elements exist
        this.setupUploadFunctionality();
    }

    loadSavedLogo() {
        const savedLogo = localStorage.getItem(this.storageKey);
        if (savedLogo) {
            this.displayLogo(savedLogo);
        }
    }

    displayLogo(logoData) {
        // Display in header logo
        const headerLogo = document.getElementById('headerLogo');
        if (headerLogo) {
            headerLogo.src = logoData;
            headerLogo.style.display = 'inline-block';
        }

        // Display in preview (if exists on main dashboard)
        const logoPreview = document.getElementById('logoPreview');
        if (logoPreview) {
            logoPreview.src = logoData;
            logoPreview.style.display = 'block';
        }

        // Update any other logo elements
        const allLogos = document.querySelectorAll('.a1apsvc-logo');
        allLogos.forEach(logo => {
            logo.src = logoData;
            logo.style.display = 'inline-block';
        });
    }

    setupUploadFunctionality() {
        const logoInput = document.getElementById('logoInput');
        if (logoInput) {
            logoInput.addEventListener('change', (e) => {
                this.handleLogoUpload(e);
            });
        }
    }

    handleLogoUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const logoData = e.target.result;
                
                // Save to localStorage
                localStorage.setItem(this.storageKey, logoData);
                
                // Display the logo
                this.displayLogo(logoData);
                
                // Show success message
                this.showSuccessMessage();
            };
            reader.readAsDataURL(file);
        }
    }

    showSuccessMessage() {
        // Create a temporary success message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 0.9rem;
        `;
        message.textContent = '✅ Eagle logo uploaded successfully!';
        
        document.body.appendChild(message);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 3000);
    }

    removeLogo() {
        localStorage.removeItem(this.storageKey);
        
        // Hide all logo elements
        const headerLogo = document.getElementById('headerLogo');
        if (headerLogo) {
            headerLogo.style.display = 'none';
        }

        const logoPreview = document.getElementById('logoPreview');
        if (logoPreview) {
            logoPreview.style.display = 'none';
        }

        const allLogos = document.querySelectorAll('.a1apsvc-logo');
        allLogos.forEach(logo => {
            logo.style.display = 'none';
        });
    }

    // Method to programmatically set logo (useful for future integrations)
    setLogo(logoData) {
        localStorage.setItem(this.storageKey, logoData);
        this.displayLogo(logoData);
    }

    // Method to get current logo data
    getLogo() {
        return localStorage.getItem(this.storageKey);
    }
}

// Initialize logo manager when script loads
const logoManager = new LogoManager();

// Make it globally available for debugging/manual control
window.A1LogoManager = logoManager;

