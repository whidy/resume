import '../css/index.css';
import { createIcons, 
  Phone, Mail, User, Code, Server, Github, Globe, HelpCircle, 
  ExternalLink, MapPin, Calendar, Award, Star, ChevronRight 
} from 'lucide';

// Initialize Lucide icons
createIcons({
  icons: {
    Phone,
    Mail, 
    User,
    Code,
    Server,
    Github,
    Globe,
    HelpCircle,
    ExternalLink,
    MapPin,
    Calendar,
    Award,
    Star,
    ChevronRight
  }
});

// Add smooth scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Add staggered animation delays
  const animatedElements = document.querySelectorAll('.animate-slide-up');
  animatedElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });

  // Add hover effects for project cards
  const projectCards = document.querySelectorAll('.bg-gray-50.rounded-lg');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Add click effect for tech tags
  const techTags = document.querySelectorAll('.tech-tag');
  techTags.forEach(tag => {
    tag.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // Add print detection for PDF version
  window.addEventListener('beforeprint', function() {
    document.body.classList.add('print');
  });

  window.addEventListener('afterprint', function() {
    document.body.classList.remove('print');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  console.log('🎉 白舜简历页面加载完成！');
});
