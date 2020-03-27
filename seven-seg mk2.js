(_ => {
  const sevenSeg = document.querySelector('.seven-seg');
  const segMap = [
    '1110111',
    '0010010',
    '1011101',
    '1011011',
    '0111010',
    '1101011',
    '1101111',
    '1010010',
    '1111111',
    '1111010',
    '1111110',
    '0101111',
    '1100101',
    '0011111',
    '1101101',
    '1101100'
  ];
  document.querySelector('section').addEventListener('change', evt => {
    const segClasses = [
      ...segMap[Number(evt.target['value'])]
    ].map((seg, idx) => (Number(seg) ? `--seg${idx}` : ''));
    sevenSeg.className = `seven-seg ${segClasses.join(' ')}`;
  });
})();
