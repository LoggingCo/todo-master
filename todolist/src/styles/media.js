const mediaQurey = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

const size = {
  mobileS: 375,
  mobileM: 568,
  mobildL: 768,
  tablet: 1024,
  desktopS: 1280,
  desktopM: 1440,
  desktopL: 1920,
};

export const { mobileS, mobileM, mobildL, tablet, desktopS, desktopM, desktopL } = size;

export const media = {
  mobileS: mediaQurey(mobileS), // @media (max-width: ${mobileS}px)
  mobileM: mediaQurey(mobileM),
  mobildL: mediaQurey(mobildL),
  tablet: mediaQurey(tablet),
  desktopS: mediaQurey(desktopS),
  desktopM: mediaQurey(desktopM),
  desktopL: mediaQurey(desktopL),
  custom: (maxWidth) => mediaQurey(maxWidth),
};
