import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const ChatIcon = (p: P) => (
  <svg {...base} {...p}><path d="M4 5h16v11H8l-4 4z" /><path d="M8 10h8M8 13h5" /></svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base} {...p}><path d="m5 12 5 5L20 7" /></svg>
);
export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const PinIcon = (p: P) => (
  <svg {...base} {...p}><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const UserIcon = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
);
export const CalendarIcon = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const StarIcon = (p: P) => (
  <svg {...base} {...p}><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" /></svg>
);
export const CameraIcon = (p: P) => (
  <svg {...base} {...p}><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
);
export const MowerIcon = (p: P) => (
  <svg {...base} {...p}><circle cx="7" cy="17" r="2.5" /><circle cx="17" cy="17" r="2.5" /><path d="M4.5 17H3v-5h13l3 5h-.5M9.5 17h5M6 12V7l-2-2M16 12l-2-5H9" /></svg>
);
export const LeafIcon = (p: P) => (
  <svg {...base} {...p}><path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15" /><path d="M5 19 13 11" /></svg>
);
export const BroomIcon = (p: P) => (
  <svg {...base} {...p}><path d="M19 3 11 11" /><path d="M8 11h6l1 2-5 8H5l-1-3z" /><path d="M7 21l2-4M10.5 21l2-4" /></svg>
);
export const WindowIcon = (p: P) => (
  <svg {...base} {...p}><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M12 3v18M4 12h16" /></svg>
);
export const HouseIcon = (p: P) => (
  <svg {...base} {...p}><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></svg>
);
export const BuildingIcon = (p: P) => (
  <svg {...base} {...p}><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></svg>
);
export const HammerIcon = (p: P) => (
  <svg {...base} {...p}><path d="m14 6 4 4-9.5 9.5a2 2 0 0 1-3-3z" /><path d="M13 3h3l5 5-2 2-3-3h-3z" /></svg>
);
export const SnowIcon = (p: P) => (
  <svg {...base} {...p}><path d="M12 2v20M4 7l16 10M20 7 4 17" /><path d="m9 4 3 2 3-2M9 20l3-2 3 2" /></svg>
);
export const DotsIcon = (p: P) => (
  <svg {...base} {...p}><circle cx="5" cy="12" r="1.2" /><circle cx="12" cy="12" r="1.2" /><circle cx="19" cy="12" r="1.2" /></svg>
);
export const InstagramIcon = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
);
export const FacebookIcon = (p: P) => (
  <svg {...base} {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8" /></svg>
);
export const MailIcon = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);

export const serviceIcons = {
  mower: MowerIcon,
  leaf: LeafIcon,
  broom: BroomIcon,
  window: WindowIcon,
  house: HouseIcon,
  building: BuildingIcon,
  hammer: HammerIcon,
  snow: SnowIcon,
  dots: DotsIcon,
} as const;
