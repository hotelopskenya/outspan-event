const form = document.getElementById('eventForm');
const $ = id => document.getElementById(id);
const val = name => form.elements[name]?.value?.trim() || '';
const prettyDate = value => {
  if (!value) return 'Not selected';
  const [y,m,d] = value.split('-').map(Number);
  return new Date(y,m-1,d).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'});
};
function updatePreview() {
  $('sumName').textContent = val('eventName') || 'Untitled event';
  $('sumDate').textContent = val('eventDate') ? prettyDate(val('eventDate')) + (val('endDate') && val('endDate') !== val('eventDate') ? ' – ' + prettyDate(val('endDate')) : '') : 'Not selected';
  $('sumTime').textContent = (val('startTime') || '—') + ' – ' + (val('endTime') || '—');
  $('sumGuests').textContent = (val('attendees') || '0') + ' people';
  $('sumVenue').textContent = val('venue') || 'To be confirmed';
  $('sumLayout').textContent = val('layout') || 'Not selected';
  const services = [...form.querySelectorAll('input[name="services"]:checked')].map(el => el.value);
  $('sumServices').innerHTML = '';
  (services.length ? services : ['No services selected']).forEach(service => {
    const li = document.createElement('li'); li.textContent = service; $('sumServices').appendChild(li);
  });
}
form.addEventListener('input', updatePreview);
form.addEventListener('change', updatePreview);
form.addEventListener('reset', () => setTimeout(() => { $('statusBadge').textContent='Draft'; $('orderRef').textContent='EO-DRAFT'; updatePreview(); }, 0));
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const ref = 'EO-' + new Date().toISOString().slice(0,10).replaceAll('-','') + '-' + Math.random().toString(36).slice(2,6).toUpperCase();
  $('orderRef').textContent = ref;
  $('statusBadge').textContent = 'Ready to print';
  window.print();
});
$('printBtn').addEventListener('click', () => window.print());
updatePreview();
