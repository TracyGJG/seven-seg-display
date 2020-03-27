(_ => {
  const sevenSeg = document.querySelector('.seven-seg');
  const segClasses = [
    '--seg0 --seg1 --seg2 --seg4 --seg5 --seg6',
    '--seg2 --seg5',
    '--seg0 --seg2 --seg3 --seg4 --seg6',
    '--seg0 --seg2 --seg3 --seg5 --seg6',
    '--seg1 --seg2 --seg3 --seg5',
    '--seg0 --seg1 --seg3 --seg5 --seg6',
    '--seg0 --seg1 --seg3 --seg4 --seg5 --seg6',
    '--seg0 --seg2 --seg5',
    '--seg0 --seg1 --seg2 --seg3 --seg4 --seg5 --seg6',
    '--seg0 --seg1 --seg2 --seg3 --seg5',
    '--seg0 --seg1 --seg2 --seg3 --seg4 --seg5',
    '--seg1 --seg3 --seg4 --seg5 --seg6',
    '--seg0 --seg1 --seg4 --seg6',
    '--seg2 --seg3 --seg4 --seg5 --seg6',
    '--seg0 --seg1 --seg3 --seg4 --seg6',
    '--seg0 --seg1 --seg3 --seg4'
  ];
  document.querySelector('section').addEventListener('change', evt => {
    sevenSeg.className = `seven-seg ${segClasses[Number(evt.target['value'])]}`;
  });
})();
