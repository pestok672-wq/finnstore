import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ isCollapsed = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Beranda', path: '/homepage', icon: 'Home' },
    { name: 'Katalog Game', path: '/game-catalog', icon: 'Gamepad2' },
    { name: 'Checkout', path: '/payment-checkout', icon: 'CreditCard' },
    { name: 'Dashboard', path: '/account-dashboard', icon: 'User' },
  ];

  const moreMenuItems = [
    { name: 'Pusat Bantuan', path: '/support-center', icon: 'HelpCircle' },
    { name: 'Keamanan', path: '/security-trust', icon: 'Shield' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-gaming border-b border-border' 
            : 'bg-background'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gaming-gradient">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gaming-gradient">
                  Finn Gaming
                </span>
                <span className="text-xs text-text-secondary -mt-1">
                  Store
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-gaming'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </a>
              ))}
              
              {/* More Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-muted transition-all duration-200">
                  <Icon name="MoreHorizontal" size={18} />
                  <span>Lainnya</span>
                </button>
                
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-gaming-modal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {moreMenuItems?.map((item) => (
                      <a
                        key={item?.path}
                        href={item?.path}
                        className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                          isActivePath(item?.path)
                            ? 'bg-primary/10 text-primary font-medium' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                        }`}
                      >
                        <Icon name={item?.icon} size={16} />
                        <span>{item?.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* WhatsApp Support */}
              <Button
                variant="outline"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                className="hidden sm:flex"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                Bantuan
              </Button>

              {/* Top Up Button */}
              <Button
                variant="default"
                size="sm"
                iconName="Plus"
                iconPosition="left"
                className="bg-gaming-action hover:bg-gaming-action/90"
              >
                Top Up
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={handleMobileMenuToggle}
                className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-colors duration-200"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
      {/* Mobile Menu */}
      <div className={`fixed top-16 right-0 w-80 max-w-[90vw] h-[calc(100vh-4rem)] bg-card border-l border-border z-40 lg:hidden transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                Menu Utama
              </h3>
              {navigationItems?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-gaming'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </a>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                Lainnya
              </h3>
              {moreMenuItems?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-gaming'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="p-4 border-t border-border space-y-3">
            <Button
              variant="outline"
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => {
                window.open('https://wa.me/6281234567890', '_blank');
                closeMobileMenu();
              }}
            >
              Hubungi WhatsApp
            </Button>
            
            <Button
              variant="default"
              fullWidth
              iconName="Plus"
              iconPosition="left"
              className="bg-gaming-action hover:bg-gaming-action/90"
              onClick={closeMobileMenu}
            >
              Top Up Sekarang
            </Button>
          </div>
        </div>
      </div>
      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;