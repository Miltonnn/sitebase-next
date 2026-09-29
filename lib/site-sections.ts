export const siteSections = {
  servicos: true,
  produtos: true,
  blog: true,
};

export type SiteSection = keyof typeof siteSections;

export function isSectionEnabled(section?: SiteSection) {
  return section ? siteSections[section] : true;
}
