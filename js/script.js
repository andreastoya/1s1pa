document.addEventListener('DOMContentLoaded', () => {
    // Initialize feather icons
    feather.replace();
  
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
      });
  
      // Close mobile menu when clicking on links
      const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
        });
      });
    }
  
    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        // Filter projects
        projectCards.forEach(card => {
          if (category === 'All' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  
    // Load more projects button (simulation)
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.classList.add('loading');
        
        // Simulate loading delay
        setTimeout(() => {
          loadMoreBtn.classList.remove('loading');
          
          // Here you would normally fetch and add more projects
          // For demo purposes, we'll just show a message
          loadMoreBtn.textContent = 'No more projects to load';
          loadMoreBtn.disabled = true;
        }, 1500);
      });
    }
  
    // Sticky header
    const header = document.querySelector('.sticky-header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  
    // Video modal functionality (placeholder)
    const playButton = document.querySelector('.play-button button');
    if (playButton) {
      playButton.addEventListener('click', () => {
        alert("Video feature coming soon!");
      });
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });