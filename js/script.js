  // ---------- Page navigation ----------
  function showPage(id){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('nav.primary button').forEach(b=>{
      b.classList.toggle('active', b.dataset.page === id);
    });
    document.querySelector('nav.primary').classList.remove('open');
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  }

  // ---------- Forms ----------
  function handleFormSubmit(e, successId){
    e.preventDefault();
    document.getElementById(successId).classList.add('show');
    e.target.reset();
    return false;
  }

  // ---------- Chat widget ----------
  function toggleChat(){
    document.getElementById('chatPanel').classList.toggle('open');
  }

  function addMsg(text, who){
    const body = document.getElementById('chatBody');
    const div = document.createElement('div');
    div.className = 'msg ' + who;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  const botReplies = {
    subjects: "We teach English, Mathematics, French, IT, Science and Data Science, plus Coding and Study Skills — for pupils from Class 1 through senior secondary.",
    enrol: "Enrolling is simple: send an enquiry, meet your matched tutor on a free intro call, then confirm your subjects and schedule on the Enrol Now page.",
    pricing: "Pricing depends on subject, format (one-to-one or small group) and lesson frequency. Send an enquiry with your pupil's class and preferred subjects and we'll share a quote within 24 hours.",
    teachers: "All our tutors are credential-checked and subject-tested. Visit the 'Our Tutors' page to see profiles, experience and time zones.",
    human: "Of course — the fastest way to reach a person is via the Enquiry page, or email enquiries@meridianlearning.academy. We reply within 24 hours.",
    timezone: "We schedule lessons around your local time zone, not ours — just share it on the Enquiry or Enrol form and we'll match a tutor whose hours overlap with yours.",
    default: "Thanks for your message! For anything specific, our team can help best — try the Enquiry page, or ask me about subjects, tutors, pricing or enrolling."
  };

  function quickAsk(key){
    const labelMap = {
      subjects:"Which subjects do you teach?",
      enrol:"How do I enrol?",
      pricing:"What's the pricing like?",
      human:"Can I talk to a person?"
    };
    addMsg(labelMap[key], 'user');
    setTimeout(()=>addMsg(botReplies[key] || botReplies.default, 'bot'), 450);
  }

  function sendChat(){
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if(!text) return;
    addMsg(text, 'user');
    input.value = '';
    const lower = text.toLowerCase();
    let reply = botReplies.default;
    if(lower.includes('subject')) reply = botReplies.subjects;
    else if(lower.includes('enrol') || lower.includes('enroll') || lower.includes('sign up')) reply = botReplies.enrol;
    else if(lower.includes('price') || lower.includes('cost') || lower.includes('fee')) reply = botReplies.pricing;
    else if(lower.includes('teacher') || lower.includes('tutor')) reply = botReplies.teachers;
    else if(lower.includes('time') || lower.includes('zone') || lower.includes('schedule')) reply = botReplies.timezone;
    else if(lower.includes('human') || lower.includes('person') || lower.includes('agent')) reply = botReplies.human;
    setTimeout(()=>addMsg(reply, 'bot'), 450);
  }
