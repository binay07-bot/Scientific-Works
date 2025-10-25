import { useEffect, useRef } from 'react';
import { useCalendly } from '@/hooks/useCalendly';

const CalendlyInline = () => {
  useCalendly();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <div 
          class="calendly-inline-widget" 
          data-url="https://calendly.com/binaymohanty1192004/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=00ffbf" 
          style="min-width:320px;height:700px;"
        ></div>
      `;
    }
  }, []);

  return <div ref={containerRef} className="w-full" />;
};

export default CalendlyInline;
