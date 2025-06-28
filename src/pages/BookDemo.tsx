import React from 'react';
import { Form, Input, Select, Radio, Button } from 'antd';
import { CheckCircleOutlined, HeartOutlined, BarChartOutlined } from '@ant-design/icons';
import { keyframes } from '@emotion/react';
import { FAQSection } from '../components/sections/FAQSection';
import { CallToAction } from '../components/sections/CallToAction';

const { Option } = Select;

// Morphing blob animations for the coral testimonial background
const morphingBlob1 = keyframes`
  0% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% { 
    transform: translate(-30px, 20px) scale(1.08); 
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% { 
    transform: translate(15px, -25px) scale(0.95); 
    border-radius: 50% 60% 30% 70% / 30% 40% 60% 50%;
  }
  75% { 
    transform: translate(-10px, 30px) scale(1.03); 
    border-radius: 70% 30% 60% 40% / 40% 70% 50% 30%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`

const morphingBlob2 = keyframes`
  0% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 30%;
  }
  30% { 
    transform: translate(25px, -15px) scale(0.92); 
    border-radius: 60% 40% 30% 70% / 70% 30% 40% 60%;
  }
  60% { 
    transform: translate(-20px, 35px) scale(1.12); 
    border-radius: 30% 70% 40% 60% / 50% 40% 70% 30%;
  }
  85% { 
    transform: translate(40px, -10px) scale(0.98); 
    border-radius: 70% 30% 60% 40% / 30% 60% 50% 40%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 30%;
  }
`

const morphingBlob3 = keyframes`
  0% { 
    transform: translateX(-50%) translate(0px, 0px) scale(1); 
    border-radius: 50% 50% 40% 60% / 30% 70% 60% 40%;
  }
  20% { 
    transform: translateX(-50%) translate(-35px, 25px) scale(1.06); 
    border-radius: 60% 40% 70% 30% / 60% 40% 30% 70%;
  }
  45% { 
    transform: translateX(-50%) translate(20px, -30px) scale(0.89); 
    border-radius: 40% 70% 30% 60% / 40% 60% 70% 30%;
  }
  70% { 
    transform: translateX(-50%) translate(-15px, 40px) scale(1.15); 
    border-radius: 70% 30% 60% 40% / 50% 30% 40% 70%;
  }
  100% { 
    transform: translateX(-50%) translate(0px, 0px) scale(1); 
    border-radius: 50% 50% 40% 60% / 30% 70% 60% 40%;
  }
`

export default function BookDemo() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form submitted:', values);
    // Handle form submission here
  };

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
    maxWidth: getResponsiveStyle('100%', '768px', '800px'),
    margin: '0 auto',
    padding: getResponsiveStyle('0 4px', '0 8px', '0')
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: getResponsiveStyle('1fr', '1fr', 'repeat(2, 1fr)'),
    gap: getResponsiveStyle('20px', '24px', '25px'),
    marginBottom: getResponsiveStyle('24px', '28px', '32px')
  };

  const valueCardStyle = {
    background: 'white',
    borderRadius: getResponsiveStyle('12px', '14px', '16px'),
    padding: getResponsiveStyle('16px', '17px', '18px'),
    marginBottom: getResponsiveStyle('12px', '13px', '15px'),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
  };

  const valueItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: getResponsiveStyle('10px', '11px', '12px'),
    marginBottom: getResponsiveStyle('12px', '13px', '15px')
  };

  const iconStyle = (bgColor: string) => ({
    width: getResponsiveStyle('26px', '28px', '30px'),
    height: getResponsiveStyle('26px', '28px', '30px'),
    background: bgColor,
    borderRadius: getResponsiveStyle('5px', '5.5px', '6px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: getResponsiveStyle('13px', '14px', '15px'),
    flexShrink: 0
  });

  const testimonialStyle: React.CSSProperties = {
    background: '#ff5c57',
    color: 'white',
    borderRadius: getResponsiveStyle('12px', '14px', '16px'),
    padding: getResponsiveStyle('24px 20px', '28px 22px', '32px 24px'),
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: getResponsiveStyle('200px', '190px', '180px')
  };

  const formCardStyle = {
    background: 'white',
    borderRadius: getResponsiveStyle('12px', '14px', '16px'),
    padding: getResponsiveStyle('20px', '22px', '24px'),
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
  };

  // Add responsive CSS
  const responsiveCSS = `
    @media (max-width: 767px) {
      .demo-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
      
      .testimonial-image {
        width: 200px !important;
        margin-top: 20px !important;
        margin-bottom: 15px !important;
      }
      
      .testimonial-quote {
        margin-top: -30px !important;
        margin-left: 5% !important;
        font-size: 18px !important;
      }
      
      .stats-grid {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
        padding: 12px !important;
      }
      
      .stats-number {
        font-size: 16px !important;
      }
      
      .stats-text {
        font-size: 10px !important;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      .demo-grid {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
      }
      
      .testimonial-image {
        width: 250px !important;
        margin-top: 30px !important;
        margin-bottom: 20px !important;
      }
      
      .testimonial-quote {
        margin-top: -40px !important;
        margin-left: 8% !important;
        font-size: 20px !important;
      }
      
      .stats-grid {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 14px !important;
        padding: 14px !important;
      }
    }
  `;

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = responsiveCSS;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Coral testimonial background with animated blobs
  const TestimonialBlobBackground = ({ children }: { children: React.ReactNode }) => (
    <div style={{
      position: 'relative',
      background: '#001223',
      borderRadius: getResponsiveStyle('12px', '14px', '16px'),
      padding: getResponsiveStyle('24px 20px', '28px 22px', '32px 24px'),
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minHeight: getResponsiveStyle('200px', '190px', '180px')
    }}>
      {/* Animated blobs */}
      <div style={{
        position: 'absolute',
        top: '-22%',
        left: '-25%',
        width: '300px',
        height: '300px',
        backgroundImage: 'url("/clarivue-blob-1.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.4,
        zIndex: 1,
        animation: `${morphingBlob1} 14s cubic-bezier(0.4, 0.0, 0.6, 1) infinite`
      }} />
      
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '-20%',
        width: '250px',
        height: '250px',
        rotate: '90deg',
        backgroundImage: 'url("/clarivue-blob-22.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.3,
        zIndex: 1,
        animation: `${morphingBlob2} 18s cubic-bezier(0.25, 0.1, 0.75, 0.9) infinite`,
        animationDelay: '3s'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '15%',
        width: '200px',
        height: '200px',
        backgroundImage: 'url("/clarivue-blob-3.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.35,
        zIndex: 1,
        animation: `${morphingBlob3} 22s cubic-bezier(0.3, 0.0, 0.7, 1) infinite`,
        animationDelay: '7s'
      }} />
      
      {/* Content with higher z-index */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Main grid */}
        <div style={gridStyle} className="demo-grid">
          
          {/* Left Side */}
          <div>
            {/* Value Proposition Card */}
            <div style={valueCardStyle}>
              <h1 style={{ 
                fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                fontWeight: '600', 
                color: '#1F2937', 
                marginBottom: getResponsiveStyle('12px', '13px', '15px'),
                lineHeight: '1.5'
              }}>
                Take the guesswork out of hiring with our intelligent interview assistant.
              </h1>
              
              <div>
                <div style={valueItemStyle}>
                  <div style={iconStyle('linear-gradient(135deg, #ff5c57 0%, #ffb5b3 100%)')}>
                    ⏱️
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#1F2937', 
                      marginBottom: '3px', 
                      fontSize: getResponsiveStyle('12px', '12.5px', '13px')
                    }}>
                      No more note-taking.
                    </div>
                    <div style={{ 
                      color: '#6B7280', 
                      fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                      lineHeight: '1.5' 
                    }}>
                      Clarivue captures everything — you stay focused.
                    </div>
                  </div>
                </div>
                
                <div style={valueItemStyle}>
                  <div style={iconStyle('linear-gradient(135deg, #001223 0%, #5fb3d7 100%)')}>
                    👁️
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#1F2937', 
                      marginBottom: '3px', 
                      fontSize: getResponsiveStyle('12px', '12.5px', '13px')
                    }}>
                      Ask better questions.
                    </div>
                    <div style={{ 
                      color: '#6B7280', 
                      fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                      lineHeight: '1.5' 
                    }}>
                      Real-time cues and follow-ups, right when you need them.
                    </div>
                  </div>
                </div>
                
                <div style={valueItemStyle}>
                  <div style={iconStyle('linear-gradient(135deg, #efacd2 0%, #ebcdd1 100%)')}>
                    📊
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#1F2937', 
                      marginBottom: '3px', 
                      fontSize: getResponsiveStyle('12px', '12.5px', '13px')
                    }}>
                      Decide with confidence.
                    </div>
                    <div style={{ 
                      color: '#6B7280', 
                      fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                      lineHeight: '1.5' 
                    }}>
                      Instant scoring and insights to hire the best, faster.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <TestimonialBlobBackground>
              {/* Main image area - centered portrait without circular crop */}
              <div style={{ 
                flex: 1,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginTop: getResponsiveStyle('25px', '35px', '45px'),
                marginBottom: getResponsiveStyle('15px', '20px', '25px')
              }}>
                <img 
                  src="/chrissy-moore.png"
                  alt="Chrissy Moore"
                  className="testimonial-image"
                  style={{ 
                    width: getResponsiveStyle('220px', '260px', '300px'), 
                    height: 'auto', 
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    zIndex: 5,
                    position: 'relative'
                  }}
                />
              </div>
              
              {/* Quote section at bottom */}
              <div style={{ 
                position: 'relative', 
                zIndex: 10, 
                textAlign: 'left',
                marginTop: getResponsiveStyle('-40px', '-50px', '-60px'),
                marginLeft: getResponsiveStyle('8%', '9%', '10%')
              }}>
                <blockquote 
                  className="testimonial-quote"
                  style={{ 
                    fontSize: getResponsiveStyle('20px', '22px', '24px'), 
                    fontWeight: '700', 
                    marginBottom: getResponsiveStyle('18px', '21px', '24px'), 
                    lineHeight: '1.3',
                    color: 'white',
                    margin: '0 0 24px 0'
                  }}
                >
                  "We're hiring faster, more confidently, and with less effort."
                </blockquote>
                
                {/* Attribution */}
                <div>
                  <div style={{ 
                    fontWeight: '700', 
                    fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                    color: 'white',
                    marginBottom: '4px'
                  }}>
                    Chrissy Moore
                  </div>
                  <div style={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: getResponsiveStyle('14px', '15px', '16px'),
                    fontWeight: '400'
                  }}>
                    Head of Talent Acquisition
                  </div>
                </div>
              </div>
            </TestimonialBlobBackground>
          </div>

          {/* Right Section - Booking Form */}
          <div style={formCardStyle}>
            <h3 style={{ 
              fontSize: getResponsiveStyle('18px', '19px', '20px'), 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: getResponsiveStyle('20px', '22px', '24px')
            }}>
              Book a demo
            </h3>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="Name*"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input 
                  placeholder="Your name" 
                  style={{ 
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'), 
                    height: getResponsiveStyle('38px', '39px', '40px'),
                    fontSize: getResponsiveStyle('14px', '15px', '16px')
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input 
                  placeholder="Work email" 
                  style={{ 
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'), 
                    height: getResponsiveStyle('38px', '39px', '40px'),
                    fontSize: getResponsiveStyle('14px', '15px', '16px')
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Role"
                name="role"
                rules={[{ required: true, message: 'Please select your role' }]}
              >
                <Select 
                  placeholder="— Please select —" 
                  style={{ 
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'), 
                    height: getResponsiveStyle('38px', '39px', '40px')
                  }}
                >
                  <Option value="recruiter">Recruiter</Option>
                  <Option value="hiring-manager">Hiring Manager</Option>
                  <Option value="hr-director">HR Director</Option>
                  <Option value="talent-acquisition">Talent Acquisition</Option>
                  <Option value="ceo">CEO</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Company size"
                name="companySize"
                rules={[{ required: true, message: 'Please select company size' }]}
              >
                <Radio.Group style={{ width: '100%' }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: getResponsiveStyle('6px', '7px', '8px'),
                    alignItems: 'flex-start'
                  }}>
                    <Radio.Button value="small" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: getResponsiveStyle('0 12px', '0 14px', '0 16px'),
                      fontSize: getResponsiveStyle('13px', '14px', '15px')
                    }}>
                      &lt; 100
                    </Radio.Button>
                    <Radio.Button value="medium" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: getResponsiveStyle('0 12px', '0 14px', '0 16px'),
                      fontSize: getResponsiveStyle('13px', '14px', '15px')
                    }}>
                      100 to 500
                    </Radio.Button>
                    <Radio.Button value="large" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: getResponsiveStyle('0 12px', '0 14px', '0 16px'),
                      fontSize: getResponsiveStyle('13px', '14px', '15px')
                    }}>
                      500+
                    </Radio.Button>
                  </div>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="How did you hear about us?"
                name="referralSource"
              >
                <Input 
                  placeholder="Optional" 
                  style={{ 
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'), 
                    height: getResponsiveStyle('38px', '39px', '40px'),
                    fontSize: getResponsiveStyle('14px', '15px', '16px')
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: '100%',
                    height: getResponsiveStyle('44px', '46px', '48px'),
                    background: 'linear-gradient(135deg,rgb(250, 185, 159) 0%,rgb(251, 202, 248) 100%)',
                    border: 'none',
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'),
                    fontSize: getResponsiveStyle('14px', '15px', '16px'),
                    fontWeight: '600',
                    boxShadow: '0 4px 12px rgba(255, 92, 87, 0.3)',
                    marginBottom: getResponsiveStyle('24px', '28px', '32px'),
                    color: '#001223'
                  }}
                >
                  Submit Request
                </Button>
                
                {/* Stats Bar */}
                <div 
                  className="stats-grid"
                  style={{
                    background: 'linear-gradient(135deg, #D5ECFF 0%, #ACBAFF 100%)',
                    borderRadius: getResponsiveStyle('10px', '11px', '12px'),
                    padding: getResponsiveStyle('14px', '15px', '16px'),
                    display: 'grid',
                    gridTemplateColumns: getResponsiveStyle('1fr', 'repeat(3, 1fr)', 'repeat(3, 1fr)'),
                    gap: getResponsiveStyle('12px', '14px', '16px'),
                    color: '#001223'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      className="stats-number"
                      style={{ 
                        fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                        fontWeight: '700', 
                        marginBottom: '4px' 
                      }}
                    >
                      6-10 hrs
                    </div>
                    <div 
                      className="stats-text"
                      style={{ 
                        fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                        opacity: 0.9, 
                        lineHeight: '1.3' 
                      }}
                    >
                      Average time recruiters save per week.
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      className="stats-number"
                      style={{ 
                        fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                        fontWeight: '700', 
                        marginBottom: '4px' 
                      }}
                    >
                      91%
                    </div>
                    <div 
                      className="stats-text"
                      style={{ 
                        fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                        opacity: 0.9, 
                        lineHeight: '1.3' 
                      }}
                    >
                      Satisfaction with interviewers and hiring managers.
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      className="stats-number"
                      style={{ 
                        fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                        fontWeight: '700', 
                        marginBottom: '4px' 
                      }}
                    >
                      28%
                    </div>
                    <div 
                      className="stats-text"
                      style={{ 
                        fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                        opacity: 0.9, 
                        lineHeight: '1.3' 
                      }}
                    >
                      Fewer interviews per hire.
                    </div>
                  </div>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* FAQ section */}
        <FAQSection />

        {/* Call to Action section */}
        <CallToAction />
      </div>
    </div>
  );
} 