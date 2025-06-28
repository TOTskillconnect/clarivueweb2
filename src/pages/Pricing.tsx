import React from 'react';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { TrustedBySection } from '../components/sections/TrustedBySection';
import { FAQSection } from '../components/sections/FAQSection';
import { CallToAction } from '../components/sections/CallToAction';

export default function Pricing() {
  // Responsive helper function
  const getResponsiveStyle = (mobile: any, tablet: any, desktop: any) => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    return isMobile ? mobile : isTablet ? tablet : desktop;
  };

  const pageStyle = {
    minHeight: '100vh',
    background: 'white',
    padding: getResponsiveStyle('80px 12px 32px', '100px 16px 40px', '120px 16px 48px'),
    fontFamily: 'body'
  };

  const containerStyle = {
    maxWidth: getResponsiveStyle('100%', '768px', '1200px'),
    margin: '0 auto',
    padding: getResponsiveStyle('0 4px', '0 8px', '0')
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: getResponsiveStyle('32px', '40px', '48px')
  };

  const pricingGridStyle = {
    display: 'grid',
    gridTemplateColumns: getResponsiveStyle(
      '1fr', 
      'repeat(auto-fit, minmax(300px, 1fr))', 
      'repeat(auto-fit, minmax(320px, 1fr))'
    ),
    gap: getResponsiveStyle('16px', '20px', '24px'),
    marginBottom: getResponsiveStyle('32px', '40px', '48px')
  };

  const cardStyle = {
    background: 'white',
    borderRadius: getResponsiveStyle('12px', '14px', '16px'),
    padding: getResponsiveStyle('24px 20px', '28px 22px', '32px 24px'),
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    position: 'relative' as const,
    height: 'fit-content'
  };

  const popularCardStyle = {
    ...cardStyle,
    border: getResponsiveStyle(
      '2px solid #ff5c57',
      '2.5px solid #ff5c57',
      '3px solid #ff5c57'
    ),
    transform: getResponsiveStyle(
      'scale(1.02) translateY(-4px)',
      'scale(1.03) translateY(-6px)',
      'scale(1.05) translateY(-8px)'
    ),
    boxShadow: getResponsiveStyle(
      `0 15px 30px rgba(0, 0, 0, 0.12),
       0 6px 15px rgba(255, 92, 87, 0.2),
       inset 0 1px 0 rgba(255, 255, 255, 0.8),
       inset 0 -1px 0 rgba(0, 0, 0, 0.1)`,
      `0 18px 35px rgba(0, 0, 0, 0.13),
       0 7px 18px rgba(255, 92, 87, 0.2),
       inset 0 1px 0 rgba(255, 255, 255, 0.8),
       inset 0 -1px 0 rgba(0, 0, 0, 0.1)`,
      `0 20px 40px rgba(0, 0, 0, 0.15),
       0 8px 20px rgba(255, 92, 87, 0.2),
       inset 0 1px 0 rgba(255, 255, 255, 0.8),
       inset 0 -1px 0 rgba(0, 0, 0, 0.1)`
    ),
    background: `linear-gradient(145deg, #ffffff 0%, #fff8f8 100%)`,
    position: 'relative' as const,
    zIndex: 10
  };

  const popularBadgeStyle = {
    position: 'absolute' as const,
    top: getResponsiveStyle('-10px', '-11px', '-12px'),
    left: '50%',
    transform: 'translateX(-50%)',
    background: "linear-gradient(135deg,rgb(250, 185, 159) 0%,rgb(251, 202, 248) 100%)",
    color: '#1F2937',
    padding: getResponsiveStyle('4px 12px', '5px 14px', '6px 16px'),
    borderRadius: getResponsiveStyle('16px', '18px', '20px'),
    fontSize: getResponsiveStyle('10px', '11px', '12px'),
    fontWeight: '700',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(255, 92, 87, 0.3)',
    animation: 'gleam 3s ease-in-out infinite'
  };

  const featureStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: getResponsiveStyle('6px', '7px', '8px'),
    marginBottom: getResponsiveStyle('10px', '11px', '12px'),
    fontSize: getResponsiveStyle('13px', '13.5px', '14px'),
    lineHeight: '1.5'
  };

  const checkIconStyle = {
    color: '#10B981',
    fontSize: getResponsiveStyle('14px', '15px', '16px'),
    marginTop: '2px',
    flexShrink: 0
  };

  const buttonStyle = {
    width: '100%',
    height: getResponsiveStyle('44px', '46px', '48px'),
    borderRadius: getResponsiveStyle('6px', '7px', '8px'),
    fontSize: getResponsiveStyle('14px', '15px', '16px'),
    fontWeight: '600',
    marginTop: getResponsiveStyle('20px', '22px', '24px')
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(135deg,rgb(250, 185, 159) 0%,rgb(251, 202, 248) 100%)",
    border: 'none',
    color: '#001223',
    boxShadow: '0 4px 12px rgba(255, 92, 87, 0.3)'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: 'transparent',
    border: '2px solidrgb(6, 77, 159)',
    color: '#1E2A78'
  };

  const keyframesCSS = `
    @keyframes gleam {
      0% {
        box-shadow: 0 4px 12px rgba(81, 177, 247, 0.3), inset 0 0 0 rgba(255, 255, 255, 0);
      }
      50% {
        box-shadow: 0 4px 12px rgba(81, 177, 247, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.4);
      }
      100% {
        box-shadow: 0 4px 12px rgba(81, 177, 247, 0.3), inset 0 0 0 rgba(255, 255, 255, 0);
      }
    }

    @media (max-width: 767px) {
      .pricing-grid {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }
      
      .popular-card {
        transform: scale(1.02) translateY(-2px) !important;
        margin: 8px 0 !important;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      .pricing-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
        gap: 20px !important;
      }
      
      .popular-card {
        transform: scale(1.03) translateY(-4px) !important;
      }
    }
  `;

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = keyframesCSS;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={{ 
            fontSize: getResponsiveStyle('32px', '40px', '48px'), 
            fontWeight: '700', 
            color: '#1F2937', 
            marginBottom: getResponsiveStyle('12px', '14px', '16px'),
            lineHeight: '1.1'
          }}>
            Pricing
          </h1>
          <p style={{ 
            fontSize: getResponsiveStyle('16px', '18px', '20px'), 
            color: '#4B5563', 
            maxWidth: getResponsiveStyle('320px', '500px', '600px'),
            margin: '0 auto',
            lineHeight: '1.5',
            padding: getResponsiveStyle('0 8px', '0 12px', '0')
          }}>
            For fast-moving teams who want faster, fairer, and more confident hiring.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={pricingGridStyle} className="pricing-grid">
          {/* Free Tier */}
          <div style={cardStyle}>
            <h3 style={{ 
              fontSize: getResponsiveStyle('20px', '22px', '24px'), 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: getResponsiveStyle('6px', '7px', '8px')
            }}>
              Free
            </h3>
            
            <div style={{ marginBottom: getResponsiveStyle('12px', '14px', '16px') }}>
              <span style={{ 
                fontSize: getResponsiveStyle('40px', '44px', '48px'), 
                fontWeight: '700', 
                color: '#1F2937' 
              }}>
                $0
              </span>
            </div>

            <p style={{ 
              color: '#6B7280', 
              fontSize: getResponsiveStyle('14px', '15px', '16px'), 
              marginBottom: getResponsiveStyle('20px', '22px', '24px'),
              lineHeight: '1.5'
            }}>
              For lean teams or early-stage startups that want to streamline interviews at no cost.
            </p>

            <Button style={secondaryButtonStyle}>
              Get started
            </Button>

            <div style={{ marginBottom: getResponsiveStyle('20px', '22px', '24px'), marginTop: getResponsiveStyle('20px', '22px', '24px') }}>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>60 free minutes/month</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Access to real-time prompts & smart follow-ups</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Interview summary history (7 days)</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Integrates with Zoom, Google Meet, Teams</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Basic insights & scoring</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Email support</span>
              </div>
            </div>
          </div>

          {/* Pro Tier */}
          <div style={popularCardStyle} className="popular-card">
            <div style={popularBadgeStyle}>
              Most Popular
            </div>
            
            <h3 style={{ 
              fontSize: getResponsiveStyle('20px', '22px', '24px'), 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: getResponsiveStyle('6px', '7px', '8px')
            }}>
              Pro
            </h3>
            
            <div style={{ marginBottom: getResponsiveStyle('12px', '14px', '16px') }}>
              <span style={{ 
                fontSize: getResponsiveStyle('40px', '44px', '48px'), 
                fontWeight: '700', 
                color: '#1F2937' 
              }}>
                $39
              </span>
              <span style={{ 
                fontSize: getResponsiveStyle('14px', '15px', '16px'), 
                color: '#6B7280', 
                marginLeft: '4px' 
              }}>
                per seat/month (billed annually)
              </span>
              <div style={{ 
                fontSize: getResponsiveStyle('12px', '13px', '14px'), 
                color: '#6B7280', 
                marginTop: '4px' 
              }}>
                $49 billed monthly
              </div>
            </div>

            <p style={{ 
              color: '#6B7280', 
              fontSize: getResponsiveStyle('14px', '15px', '16px'), 
              marginBottom: getResponsiveStyle('20px', '22px', '24px'),
              lineHeight: '1.5'
            }}>
              For hiring teams ready to level up with automation, insights, and collaboration.
            </p>

            <Button style={primaryButtonStyle}>
              Get started
            </Button>

            <div style={{ marginBottom: getResponsiveStyle('12px', '14px', '16px'), marginTop: getResponsiveStyle('20px', '22px', '24px') }}>
              <div style={featureStyle}>
                <span><strong>Everything in Free, plus:</strong></span>
              </div>
            </div>

            <div style={{ marginBottom: getResponsiveStyle('20px', '22px', '24px') }}>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Unlimited minutes</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Unlimited members</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Full history & analytics</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Shared scorecards</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Centralized billing & admin dashboard</span>
              </div>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div style={cardStyle}>
            <h3 style={{ 
              fontSize: getResponsiveStyle('20px', '22px', '24px'), 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: getResponsiveStyle('6px', '7px', '8px')
            }}>
              Enterprise
            </h3>
            
            <div style={{ marginBottom: getResponsiveStyle('12px', '14px', '16px') }}>
              <span style={{ 
                fontSize: getResponsiveStyle('40px', '44px', '48px'), 
                fontWeight: '700', 
                color: '#1F2937' 
              }}>
                Custom
              </span>
            </div>

            <p style={{ 
              color: '#6B7280', 
              fontSize: getResponsiveStyle('14px', '15px', '16px'), 
              marginBottom: getResponsiveStyle('20px', '22px', '24px'),
              lineHeight: '1.5'
            }}>
              For high-volume or security-focused organizations needing total control.
            </p>

            <Button style={secondaryButtonStyle}>
              Talk to Sales
            </Button>

            <div style={{ marginBottom: getResponsiveStyle('12px', '14px', '16px'), marginTop: getResponsiveStyle('20px', '22px', '24px') }}>
              <div style={featureStyle}>
                <span><strong>Everything in Pro, plus:</strong></span>
              </div>
            </div>

            <div style={{ marginBottom: getResponsiveStyle('20px', '22px', '24px') }}>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Dedicated success manager</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>SSO (SAML & OpenID)</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>SCIM provisioning</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Role-based access controls</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Custom data retention & audit logs</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>SOC 2, GDPR, and enterprise compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by section */}
        <TrustedBySection />

        {/* FAQ section */}
        <FAQSection />

        {/* Call to Action section */}
        <CallToAction />
      </div>
    </div>
  );
} 