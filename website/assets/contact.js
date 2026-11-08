(() => {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const status = document.querySelector('#form-status');
  const fallback = document.querySelector('#draft-fallback');
  const output = document.querySelector('#draft-text');
  const open = document.querySelector('#open-draft');
  const build = () => {
    const values = new FormData(form);
    const topic = values.get('topic');
    const subject = `Nordic Labs enquiry — ${topic}`;
    const body = `Name: ${String(values.get('name')).trim()}\nEmail: ${String(values.get('email')).trim()}\nOrganization: ${String(values.get('company')).trim()}\nArea of interest: ${topic}\n\n${String(values.get('message')).trim()}`;
    return {subject, body};
  };
  const prepare = () => {
    if (!form.reportValidity()) return null;
    const draft = build();
    output.value = `To: info@nordiclabs.tech\nSubject: ${draft.subject}\n\n${draft.body}`;
    open.href = `mailto:info@nordiclabs.tech?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
    fallback.hidden = false;
    return draft;
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!prepare()) return;
    status.textContent = 'Your draft is ready. Open it in your email application, then review and send. Nothing has been sent from this page.';
    open.focus();
  });
  form.addEventListener('input', () => {
    if (!fallback.hidden) {
      fallback.hidden = true;
      open.removeAttribute('href');
      output.value = '';
      status.textContent = 'Your enquiry has changed. Prepare or copy it again to use the latest version.';
    }
  });
  document.querySelector('#copy-enquiry').addEventListener('click', async () => {
    if (!prepare()) return;
    try {
      await navigator.clipboard.writeText(output.value);
      status.textContent = 'Enquiry copied. Paste it into an email to info@nordiclabs.tech. Nothing has been sent.';
    } catch {
      status.textContent = 'Select and copy the enquiry below, then paste it into your email application.';
      output.focus(); output.select();
    }
  });
  document.querySelector('#enquiry-fields').disabled = false;
})();
