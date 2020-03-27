(_ => {
  const decToBin = dec => {
    const ip = [...'0000000000000000'];
    ip[Number(15 - dec)] = '1';
    return ip.join('');
  };
  const ipBit = (ip, bit) => +ip[15 - bit];
  const sevenSeg = document.querySelector('.seven-seg');
  const segMap = [
    (ip, seg) =>
      ipBit(ip, 0) ||
      ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 12) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15)
        ? ` --seg${seg}`
        : '',
    (ip, seg) =>
      ipBit(ip, 0) ||
      ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15)
        ? ` --seg${seg}`
        : '',
    (ip, seg) =>
      ipBit(ip, 0) ||
      ipBit(ip, 1) ||
      ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      ipBit(ip, 4) ||
      ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 13)
        ? ` --seg${seg}`
        : '',
    (ip, seg) =>
      ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15)
        ? ` --seg${seg}`
        : '',
    (ip, seg) =>
      ipBit(ip, 0) ||
      ipBit(ip, 2) ||
      ipBit(ip, 6) ||
      ipBit(ip, 8) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      ipBit(ip, 14) ||
      ipBit(ip, 15)
        ? ` --seg${seg}`
        : '',
    (ip, seg) =>
      ipBit(ip, 0) ||
      ipBit(ip, 1) ||
      ipBit(ip, 3) ||
      ipBit(ip, 4) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      ipBit(ip, 7) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 10) ||
      ipBit(ip, 11) ||
      ipBit(ip, 13)
        ? ` --seg${seg}`
        : '',
    (ip, seg) =>
      ipBit(ip, 0) ||
      ipBit(ip, 2) ||
      ipBit(ip, 3) ||
      ipBit(ip, 5) ||
      ipBit(ip, 6) ||
      ipBit(ip, 8) ||
      ipBit(ip, 9) ||
      ipBit(ip, 11) ||
      ipBit(ip, 12) ||
      ipBit(ip, 13) ||
      ipBit(ip, 14)
        ? ` --seg${seg}`
        : ''
  ];
  document.querySelector('section').addEventListener('change', evt => {
    const input = decToBin(evt.target['value']);
    sevenSeg.className = `seven-seg${segMap
      .map((segmnt, idx) => segmnt(input, idx))
      .join(' ')}`;
  });
})();
