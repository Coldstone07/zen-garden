import { useEffect, useState } from 'react';
import Head from 'next/head';
import EnergyFlows from '../components/EnergyFlows';

export default function Home() {
  const [formData, setFormData] = useState({ email: '', name: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [formMessage, setFormMessage] = useState('');

  const trackEvent = (eventName, eventParams = {}) => {
    // Analytics disabled until GA4 ID is configured
    // To enable: add your GA4 tracking script back to Head component
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  };

  useEffect(() => {
    trackEvent('page_view');

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setFormStatus('error');
      setFormMessage('Please enter your name');
      trackEvent('form_error', { reason: 'missing_name' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus('error');
      setFormMessage('Please enter a valid email address');
      trackEvent('form_error', { reason: 'invalid_email' });
      return;
    }

    setFormStatus('loading');

    setTimeout(() => {
      setFormStatus('success');
      setFormMessage('Thank you! We\'ll be in touch soon.');
      trackEvent('form_submission_success', {
        email: formData.email,
        name: formData.name
      });
      setFormData({ email: '', name: '' });
    }, 1000);
  };

  const clientStories = [
    {
      name: 'Jacqui',
      quote: 'Eight days ago, I wondered if anyone would notice if I died. Today I\'m going sailing.'
    },
    {
      name: 'Donald',
      quote: 'The grief I\'ve been carrying about my mother... I didn\'t even know it was there.'
    },
    {
      name: 'Ajay',
      quote: 'I was living entirely in my head. Now I can feel emotions in my body as they happen.'
    },
    {
      name: 'Antonia',
      quote: 'I lost my organizing principle when my kids left. Now I\'m finding myself.'
    }
  ];

  const outcomes = [
    { title: 'Sleep Returns', quote: 'I hadn\'t slept through the night in 3 years. Now I sleep.' },
    { title: 'Presence With People You Love', quote: 'My kids know me again. Not the exhausted version. The actual me.' },
    { title: 'Clarity On What Matters', quote: 'I stopped doing what looked good and started doing what felt true.' },
    { title: 'Purpose Without Burning Out', quote: 'I can be ambitious without losing myself.' },
    { title: 'The Ability To Stop Running', quote: 'I realized: I don\'t have to earn my existence. I can just... live it.' },
    { title: 'The Recognition That You\'re Human', quote: 'I\'m not broken. I\'m not weak. I\'m human. And that\'s enough.' }
  ];

  const phases = [
    {
      title: 'PHASE 1: DISCOVER',
      description: 'Understand what\'s really happening. Why you\'re running. What you actually need. Who you actually are underneath the achievement.',
      duration: '4-6 weeks',
      happenings: 'Weekly conversations. Journaling. Community calls.',
      shifts: 'Recognition. "Oh. That\'s what\'s happening."'
    },
    {
      title: 'PHASE 2: INTEGRATE',
      description: 'Weave this understanding into your actual life. Sleep better. Show up differently with people you love. Make choices that align with who you actually are.',
      duration: '6-8 weeks',
      happenings: 'Guided practice. Community accountability. Ongoing support.',
      shifts: 'Behavior. Presence. Relationships. Sleep.'
    },
    {
      title: 'PHASE 3: ACTUALIZE',
      description: 'Live what you\'ve learned. Lead from wholeness, not performance. Be ambitious AND alive. Help others find their way back.',
      duration: 'Ongoing',
      happenings: 'Mastery. Leadership from your actual values.',
      shifts: 'Everything. Your definition of success changes.'
    }
  ];

  const communityPhotos = Array(30).fill(0).map((_, i) => i);
  const communityPhotosLarge = Array(60).fill(0).map((_, i) => i);

  return (
    <>
      <Head>
        <title>Kairos - Stop Running. Start Living.</title>
        <meta name="description" content="A community for high achievers finding peace beyond success." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* GA4 analytics placeholder - add your GA4 ID here when ready */}
      </Head>

      <main style={{ background: 'var(--cosmic-void)', color: 'var(--moonlight-primary)' }}>
        <EnergyFlows />

        {/* SECTION 1: RECOGNITION (Hero) */}
        <section className="cosmic-section" data-section="section-0" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem' }}>
          <div className="section-container" style={{ maxWidth: '900px' }}>
            <h1 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(2rem, 6vw, 3.75rem)', lineHeight: 1.2, marginBottom: '2rem', textAlign: 'center' }}>
              You've Achieved Everything You Were Supposed To.
            </h1>

            <p className="moonlight-secondary fade-in" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem', textAlign: 'center', animationDelay: '0.1s' }}>
              So why does it feel so empty?
            </p>

            <div style={{ maxWidth: 'none', marginBottom: '3rem', textAlign: 'center', lineHeight: 1.8 }}>
              <p className="fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--moonlight-secondary)', marginBottom: '1.5rem', animationDelay: '0.2s' }}>
                You've hit the goals. Built the career. Made the money.<br/>
                Checked the boxes.
              </p>

              <p className="fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--moonlight-secondary)', marginBottom: '1.5rem', animationDelay: '0.3s' }}>
                But inside? You're running on fumes.
              </p>

              <p className="fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--moonlight-secondary)', marginBottom: '2rem', animationDelay: '0.4s' }}>
                Connected to everyone and everything except yourself.<br/>
                Optimizing everything except your own life.<br/>
                Succeeding at everything except being present.
              </p>

              <p className="fade-in" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--accent-interactive)', animationDelay: '0.5s' }}>
                You're not broken. You're not lazy. You're not ungrateful. You're human.
              </p>

              <p className="fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--accent-primary)', marginBottom: '3rem', animationDelay: '0.6s' }}>
                And you're not alone.
              </p>

              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '3rem', marginTop: '3rem' }}>
                <p className="fade-in" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 'bold', marginBottom: '1.5rem', animationDelay: '0.7s' }}>
                  What if stopping the running was the beginning?
                </p>
                <p className="fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--moonlight-secondary)', marginBottom: '1rem', animationDelay: '0.8s' }}>
                  What if you could have success <em>and</em> presence?
                </p>
                <p className="fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--moonlight-secondary)', marginBottom: '1rem', animationDelay: '0.9s' }}>
                  Achievement <em>and</em> peace?
                </p>
                <p className="fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--moonlight-secondary)', marginBottom: '2rem', animationDelay: '1s' }}>
                  Ambition <em>and</em> aliveness?
                </p>
                <p className="fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--moonlight-primary)', animationDelay: '1.1s' }}>
                  That's what becomes possible here.
                </p>
              </div>

              <p className="fade-in" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--moonlight-secondary)', marginTop: '3rem', animationDelay: '1.2s' }}>
                Not in 12 weeks. In real time. With real people. Through real work.
              </p>
            </div>

            <div style={{ textAlign: 'center' }} className="fade-in" style={{ animationDelay: '1.3s' }}>
              <button
                onClick={() => {
                  trackEvent('click_cta_primary', { section: 'hero' });
                  document.getElementById('invitation-section').scrollIntoView({ behavior: 'smooth' });
                }}
                className="cosmic-button-primary"
              >
                Let's Talk About This
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: YOU'RE NOT ALONE (Client Stories) */}
        <section className="cosmic-section" data-section="section-1" style={{ padding: '6rem 2rem' }}>
          <div className="section-container">
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '1rem', textAlign: 'center' }}>
              Meet People Like You
            </h2>
            <p className="moonlight-secondary fade-in" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.125rem', animationDelay: '0.1s' }}>
              Real names. Real stories. Real proof you're not alone.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
              {clientStories.map((story, idx) => (
                <div key={idx} className="fade-in" style={{ display: 'flex', flexDirection: 'column', animationDelay: `${0.1 + idx * 0.1}s` }}>
                  <div className="photo-placeholder" style={{ marginBottom: '2rem' }} role="img" aria-label={`${story.name}'s photo placeholder`}></div>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginBottom: '1rem' }}>{story.name}</h3>
                  <p className="moonlight-secondary" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    "{story.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT SHIFTED (Outcomes) */}
        <section className="cosmic-section" data-section="section-2" style={{ padding: '6rem 2rem' }}>
          <div className="section-container">
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '1rem', textAlign: 'center' }}>
              What Actually Changes
            </h2>
            <p className="moonlight-secondary fade-in" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.125rem', animationDelay: '0.1s' }}>
              Not Statistics. Lives.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="glass-panel slide-up" style={{ padding: '2rem', animationDelay: `${0.1 + idx * 0.08}s` }}>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                    {outcome.title}
                  </h3>
                  <p className="moonlight-secondary" style={{ fontSize: '1.125rem', fontStyle: 'italic', lineHeight: 1.8 }}>
                    "{outcome.quote}"
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', color: 'var(--moonlight-secondary)', fontSize: '1.125rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                These aren't "before and after" stories.
              </p>
              <p>
                These are people who found their way back to themselves.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMMUNITY (Photo Grid 1) */}
        <section className="cosmic-section" data-section="section-3" style={{ padding: '6rem 2rem' }}>
          <div className="section-container">
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '1rem', textAlign: 'center' }}>
              You're Joining A Community
            </h2>

            <div style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
              <p className="moonlight-secondary fade-in" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.125rem', animationDelay: '0.1s' }}>
                This isn't a program. It's not a course. It's not "business coaching" or "life optimization."
              </p>
              <p className="moonlight-secondary fade-in" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.125rem', animationDelay: '0.2s' }}>
                It's a community of people who recognized something:
              </p>
              <ul className="moonlight-secondary fade-in" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.125rem', lineHeight: 1.8, animationDelay: '0.3s' }}>
                <li>That external success doesn't equal internal peace.</li>
                <li>That you can be ambitious AND alive.</li>
                <li>That belonging matters more than performance.</li>
              </ul>
              <p className="moonlight-secondary fade-in" style={{ textAlign: 'center', fontSize: '1.125rem', animationDelay: '0.4s' }}>
                People like you. People who've walked this path. People who understand.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {communityPhotos.map((idx) => (
                <div key={idx} className="photo-placeholder" style={{ width: '100%', height: 'auto', aspectRatio: '1/1' }} role="img" aria-label={`Community member ${idx + 1} photo placeholder`}></div>
              ))}
            </div>

            <p className="moonlight-secondary fade-in" style={{ textAlign: 'center', fontSize: '1.125rem', marginTop: '3rem', animationDelay: '0.5s' }}>
              These are the people you're walking alongside.
            </p>
          </div>
        </section>

        {/* SECTION 5: THE JOURNEY (Process) */}
        <section className="cosmic-section" data-section="section-4" style={{ padding: '6rem 2rem' }}>
          <div className="section-container" style={{ maxWidth: '900px' }}>
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '3rem', textAlign: 'center' }}>
              What This Actually Looks Like
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--moonlight-secondary)', fontSize: '1.125rem', lineHeight: 1.8 }}>
              <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--accent-interactive)' }}>
                  This isn't magic. This isn't a weekend retreat. This isn't optimization.
                </p>
                <p><strong>This is real work.</strong> Guided work. Supported work. But real work nonetheless.</p>
              </div>

              <div className="fade-in" style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1.5rem', animationDelay: '0.2s' }}>
                <p style={{ fontWeight: 'semibold', marginBottom: '0.5rem' }}>It starts with recognition:</p>
                <p style={{ fontStyle: 'italic' }}>"I'm running on fumes. And I don't have to."</p>
              </div>

              <div className="fade-in" style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1.5rem', animationDelay: '0.3s' }}>
                <p style={{ fontWeight: 'semibold', marginBottom: '0.5rem' }}>Then comes the hard part:</p>
                <p style={{ fontStyle: 'italic' }}>Understanding why you're running. What you're actually chasing. What you're actually afraid of.</p>
              </div>

              <div className="fade-in" style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1.5rem', animationDelay: '0.4s' }}>
                <p style={{ fontWeight: 'semibold', marginBottom: '0.5rem' }}>Then comes the shift:</p>
                <p style={{ fontStyle: 'italic' }}>When you realize stopping doesn't mean failure. When presence starts feeling like productivity. When being human feels like enough.</p>
              </div>

              <div className="fade-in" style={{ paddingTop: '1.5rem', animationDelay: '0.5s' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '1rem' }}>The timeline?</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                  Not 12 weeks. Not 90 days. Real time.
                </p>
                <p style={{ marginBottom: '1rem' }}>Some shifts happen in days. Some in months. All of them stick because you built them.</p>
              </div>

              <div className="glass-panel fade-in" style={{ padding: '2rem', marginTop: '1rem', animationDelay: '0.6s' }}>
                <p style={{ fontWeight: 'semibold', marginBottom: '1rem' }}>This is what you're signing up for:</p>
                <ul style={{ marginBottom: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>A guide.</li>
                  <li style={{ marginBottom: '0.5rem' }}>A community.</li>
                  <li>Real work.</li>
                </ul>
                <p style={{ fontStyle: 'italic' }}>
                  And the possibility of waking up one day and realizing: You're not running anymore. You're just living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHO'S GUIDING YOU (Coach Bios) */}
        <section className="cosmic-section" data-section="section-5" style={{ padding: '6rem 2rem' }}>
          <div className="section-container">
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '4rem', textAlign: 'center' }}>
              Who's Guiding You
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
              {/* Shalini */}
              <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', animationDelay: '0.1s' }}>
                <div style={{ width: '100%', paddingBottom: '100%', position: 'relative', marginBottom: '2rem', background: 'linear-gradient(135deg, #D4CDB7 0%, #C8A882 50%, #A5968A 100%)', borderRadius: '12px' }}></div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginBottom: '1rem' }}>From Silicon Valley to Soul Valley</h3>
                <div style={{ color: 'var(--moonlight-secondary)', fontSize: '1rem', lineHeight: 1.8, flex: 1 }}>
                  <p style={{ marginBottom: '1rem' }}>I spent 20 years optimizing systems. Ford. Sun Microsystems. Oracle. Google.</p>
                  <p style={{ marginBottom: '1rem' }}>MIT and Harvard trained. Named to Crain's Top 50 Technology Talent. Senior leadership at every turn.</p>
                  <p style={{ marginBottom: '1rem' }}><strong>Externally:</strong> Perfect on paper. <strong>Internally:</strong> Profoundly disconnected.</p>
                  <p style={{ marginBottom: '1rem' }}>Despite having everything, I felt nothing. My breakdown became my breakthrough.</p>
                  <p style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontStyle: 'italic' }}>I know the path because I walked it. I know the possibility because I live it.</p>
                </div>
                <p style={{ color: 'var(--moonlight-muted)', fontSize: '0.875rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                  MIT, Harvard Business School, Enneagram Guide, Trauma-Informed Coach, Somatic Healer
                </p>
              </div>

              {/* Jatin */}
              <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', animationDelay: '0.2s' }}>
                <div style={{ width: '100%', paddingBottom: '100%', position: 'relative', marginBottom: '2rem', background: 'linear-gradient(180deg, #EDE7D3 0%, #D4CDB7 50%, #A5968A 100%)', borderRadius: '12px' }}></div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginBottom: '1rem' }}>The Integration Architect</h3>
                <div style={{ color: 'var(--moonlight-secondary)', fontSize: '1rem', lineHeight: 1.8, flex: 1 }}>
                  <p style={{ marginBottom: '1rem' }}>I spent years studying how people change. Google Research. DeepMind. Labs and data and frameworks.</p>
                  <p style={{ marginBottom: '1rem' }}>But I learned something they couldn't measure: Real transformation doesn't happen in data. It happens when you finally understand your patterns.</p>
                  <p style={{ marginBottom: '1rem' }}>My gift is seeing the pattern beneath the pattern. How your childhood survival strategies have become adult prisons.</p>
                  <p style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontStyle: 'italic' }}>You don't change through more analysis. You change through being understood by someone who's walked a similar path.</p>
                </div>
                <p style={{ color: 'var(--moonlight-muted)', fontSize: '0.875rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                  Google Research, DeepMind, PhD in Cognitive Science + Human-Computer Interaction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: THREE PHASES */}
        <section className="cosmic-section" data-section="section-6" style={{ padding: '6rem 2rem' }}>
          <div className="section-container">
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '4rem', textAlign: 'center' }}>
              How This Works: Three Phases
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              {phases.map((phase, idx) => (
                <div key={idx} className="glass-panel slide-up" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', animationDelay: `${0.1 + idx * 0.1}s` }}>
                  <h3 style={{ fontSize: '1.125rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                    {phase.title}
                  </h3>
                  <p className="moonlight-secondary" style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    {phase.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--moonlight-muted)', fontWeight: 'semibold', marginBottom: '0.25rem' }}>DURATION</p>
                      <p className="moonlight-secondary" style={{ fontSize: '1rem' }}>{phase.duration}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--moonlight-muted)', fontWeight: 'semibold', marginBottom: '0.25rem' }}>WHAT HAPPENS</p>
                      <p className="moonlight-secondary" style={{ fontSize: '1rem' }}>{phase.happenings}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--moonlight-muted)', fontWeight: 'semibold', marginBottom: '0.25rem' }}>WHAT SHIFTS</p>
                      <p className="moonlight-secondary" style={{ fontSize: '1rem' }}>{phase.shifts}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--moonlight-secondary)', fontSize: '1.125rem' }}>
              <p><strong>Not a timeline.</strong> A progression.</p>
              <p><strong>Not a program.</strong> A journey.</p>
              <p><strong>Not alone.</strong> In community.</p>
            </div>
          </div>
        </section>

        {/* SECTION 8: COMMUNITY AGAIN (Photo Grid 2) */}
        <section className="cosmic-section" data-section="section-7" style={{ padding: '6rem 2rem' }}>
          <div className="section-container">
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '1rem', textAlign: 'center' }}>
              The Real Proof
            </h2>
            <p className="moonlight-secondary fade-in" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.125rem', animationDelay: '0.1s' }}>
              Not in testimonials. Not in statistics. In community.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
              {communityPhotosLarge.map((idx) => (
                <div key={idx} className="photo-placeholder" style={{ width: '100%', height: 'auto', aspectRatio: '1/1' }} role="img" aria-label={`Community member ${idx + 1} photo placeholder`}></div>
              ))}
            </div>

            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--moonlight-secondary)', fontSize: '1.125rem' }}>
              <p><strong>These people get it.</strong></p>
              <p><strong>These people are doing it.</strong></p>
              <p>These people know: You're human. And that's enough.</p>
              <p style={{ color: 'var(--accent-primary)' }}>You're joining them.</p>
            </div>
          </div>
        </section>

        {/* SECTION 9: ONE DEEP STORY (Jacqui) */}
        <section className="cosmic-section" data-section="section-8" style={{ padding: '6rem 2rem' }}>
          <div className="section-container" style={{ maxWidth: '900px' }}>
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '3rem', textAlign: 'center' }}>
              Jacqui's Story
            </h2>

            <div className="fade-in" style={{ marginBottom: '3rem', animationDelay: '0.1s' }}>
              <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #D4CDB7 0%, #C8A882 50%, #A5968A 100%)', borderRadius: '12px', marginBottom: '3rem' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--moonlight-secondary)', fontSize: '1.125rem', lineHeight: 1.8 }}>
              <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>The Beginning</h3>
                <p style={{ marginBottom: '1rem' }}>I spent 35 years being perfect. A 5-year-old who learned to manage her mother's emotions. Who had to be flawless to be loved. Who never showed needs. Never rested. Never allowed herself joy without earning it.</p>
                <p>By 35, I was exhausted. Running. Pushing. Performing. Achieving. Everything looked perfect from the outside. Inside, I was suffocating.</p>
              </div>

              <div className="fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>The Turning Point</h3>
                <p style={{ marginBottom: '1rem' }}>I ran a marathon that took 7 hours. Not because I was slow. Because I couldn't stop pushing through pain. Alone. Always alone.</p>
                <p style={{ marginBottom: '1rem' }}>Desperately wanting support while pushing everyone away.</p>
                <p>That marathon broke something open. I reached out. And in my first conversation with Shalini, she named something I'd never been able to see: "I see volcanic fire in your energy field." I knew she was right.</p>
              </div>

              <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>The Work (The Healing Crisis)</h3>
                <p style={{ marginBottom: '1rem' }}>In Session 3, we did energy clearing work. Ten days later, I crashed completely.</p>
                <p style={{ marginBottom: '1rem' }}>I couldn't get out of bed. I couldn't function. I wondered if anyone would notice if I died.</p>
                <p style={{ marginBottom: '1rem' }}>This was the healing crisis. Exactly as predicted. But knowing it was coming didn't make it less terrifying.</p>
                <p style={{ marginBottom: '1rem' }}>I had three choices: Numb it. Force myself to be fine. Or let myself fall apart.</p>
                <p>I chose to fall apart. And I discovered I didn't drown.</p>
              </div>

              <div className="glass-panel fade-in" style={{ padding: '2rem', animationDelay: '0.5s' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Eight Days Later</h3>
                <p>I went sailing. Not because I'd earned it. Not because I was productive. Because the 5-year-old inside me had waited 35 years for an afternoon of purposeless play.</p>
                <p style={{ marginTop: '1rem' }}>And for the first time in my life, I was safe enough to give it to her.</p>
              </div>

              <div className="fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Now</h3>
                <p style={{ marginBottom: '1rem' }}>I can identify my three core patterns (abandonment, anger, grief) as they arise. I can distinguish "forced" from "inspired" action. I can rest without guilt. I can set boundaries without apology. I can feel excitement about my future.</p>
                <p style={{ color: 'var(--accent-primary)', fontStyle: 'italic' }}>Not because I'm different. Because I'm finally safe enough to be who I always was.</p>
              </div>

              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', textAlign: 'center', marginTop: '2rem' }} className="fade-in" style={{ animationDelay: '0.7s' }}>
                <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--accent-primary)' }}>
                  "The work isn't about becoming someone new. It's about finally being safe enough to be who you always were."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: THE INVITATION (CTA) */}
        <section id="invitation-section" className="cosmic-section" data-section="section-9" style={{ padding: '6rem 2rem' }}>
          <div className="section-container" style={{ maxWidth: '900px' }}>
            <h2 className="cosmic-section-title fade-in" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '3rem', textAlign: 'center' }}>
              Ready To Stop Running?
            </h2>

            <div className="fade-in" style={{ maxWidth: 'none', marginBottom: '3rem', textAlign: 'center', color: 'var(--moonlight-secondary)', fontSize: '1.125rem', lineHeight: 1.8, animationDelay: '0.1s' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                You've read this far. That means something in you recognizes this.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Maybe you're exhausted. Maybe you're empty despite success. Maybe you're just wondering: "Is there another way?"
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '2rem' }}>
                There is.
              </p>

              <div className="glass-panel fade-in" style={{ padding: '2rem', marginBottom: '2rem', animationDelay: '0.2s' }}>
                <p style={{ fontWeight: 'semibold', marginBottom: '1rem' }}>This isn't a sales call. This is a conversation.</p>
                <p style={{ marginBottom: '1rem' }}>
                  We'll talk about where you are. What you're feeling. Whether this community is right for you right now.
                </p>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 'semibold' }}>
                  No pitch. No pressure. Just a real conversation.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  If it feels true, we'll talk about next steps. If it doesn't feel right, we'll say so.
                </p>
                <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                  Either way, you'll know more about yourself. That matters.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }} className="fade-in" style={{ animationDelay: '0.3s' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your name"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'var(--glass-subtle)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--moonlight-primary)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'var(--glass-subtle)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--moonlight-primary)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  required
                />
              </div>

              {formStatus === 'error' && (
                <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.5)', borderRadius: '8px' }}>
                  <p style={{ color: '#fca5a5', fontSize: '0.875rem' }}>{formMessage}</p>
                </div>
              )}

              {formStatus === 'success' && (
                <div style={{ padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.5)', borderRadius: '8px' }}>
                  <p style={{ color: '#86efac', fontSize: '0.875rem' }}>{formMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="cosmic-button-primary"
                style={{ width: '100%', opacity: formStatus === 'loading' ? 0.5 : 1 }}
              >
                {formStatus === 'loading' ? 'Scheduling...' : 'Let\'s Have That Conversation'}
              </button>
            </form>

            <div style={{ textAlign: 'center' }} className="fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="moonlight-secondary" style={{ marginBottom: '1rem' }}>Or if you have questions first:</p>
              <a
                href="mailto:hello@kairos.com"
                style={{ color: 'var(--accent-primary)', textDecoration: 'underline', fontWeight: 'semibold', fontSize: '1.125rem' }}
              >
                Ask us anything
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }} className="fade-in" style={{ animationDelay: '0.5s' }}>
              <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--accent-primary)' }}>
                See you on the other side of running.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: 'var(--cosmic-surface)', borderTop: '1px solid var(--glass-border)', padding: '2rem 2rem', textAlign: 'center', color: 'var(--moonlight-muted)', fontSize: '0.875rem' }}>
          <p>&copy; 2025 Kairos. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
