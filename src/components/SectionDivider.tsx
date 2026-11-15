type DividerVariant =
  | 'champagne-crest'
  | 'architectural-arch'
  | 'silk-wave'
  | 'enamel-contour'
  | 'teal-cornice'
  | 'radial-horizon';

interface SectionDividerProps {
  variant: DividerVariant;
  topBg?: string;
  bottomFill?: string;
}

export function SectionDivider({
  variant,
  topBg = 'bg-[#F8F7F3] dark:bg-[#0C1E21]',
  bottomFill = 'fill-white dark:fill-[#11292D]',
}: SectionDividerProps) {
  if (variant === 'champagne-crest') {
    return (
      <div className={`${topBg} py-2 transition-colors duration-300`} aria-hidden="true">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D2B47A]/60 to-[#D2B47A]" />
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0 text-[#D2B47A]">
            <path d="M14 2L17.5 10.5L26 14L17.5 17.5L14 26L10.5 17.5L2 14L10.5 10.5L14 2Z" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="14" cy="14" r="2.2" fill="currentColor" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D2B47A]/60 to-[#D2B47A]" />
        </div>
      </div>
    );
  }

  if (variant === 'architectural-arch') {
    return (
      <div className={`${topBg} relative overflow-hidden transition-colors duration-300`} aria-hidden="true">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="block h-10 w-full md:h-14"
        >
          <path
            d="M0 72C360 12 1080 12 1440 72V72H0Z"
            className={`${bottomFill} transition-colors duration-300`}
          />
          <path
            d="M0 72C360 12 1080 12 1440 72"
            fill="none"
            stroke="#D2B47A"
            strokeOpacity="0.45"
            strokeWidth="1.25"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'silk-wave') {
    return (
      <div className={`${topBg} relative overflow-hidden transition-colors duration-300`} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full md:h-16">
          <path
            d="M0 32C280 76 560 4 860 36C1120 64 1300 20 1440 32V80H0V32Z"
            className="fill-[#183E43]/[0.06] dark:fill-[#D2B47A]/[0.06]"
          />
          <path
            d="M0 44C320 8 620 74 960 38C1180 14 1330 48 1440 40V80H0V44Z"
            className={`${bottomFill} transition-colors duration-300`}
          />
          <path
            d="M0 44C320 8 620 74 960 38C1180 14 1330 48 1440 40"
            fill="none"
            stroke="#D2B47A"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'enamel-contour') {
    return (
      <div className={`${topBg} py-4 transition-colors duration-300`} aria-hidden="true">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-3 px-6">
          <span className="h-px w-16 bg-[#D2B47A]/50 sm:w-32" />
          <svg
            width="88"
            height="24"
            viewBox="0 0 88 24"
            fill="none"
            className="text-[#183E43] dark:text-[#F8F7F3]"
          >
            <path
              d="M4 18C18 4 30 4 44 14C58 24 70 20 84 6"
              stroke="#D2B47A"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M14 6C26 18 36 18 44 10C52 2 64 6 74 18"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
          <span className="h-px w-16 bg-[#D2B47A]/50 sm:w-32" />
        </div>
      </div>
    );
  }

  if (variant === 'teal-cornice') {
    return (
      <div
        className="relative overflow-hidden bg-[#F8F7F3] dark:bg-[#0C1E21] transition-colors duration-300"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-10 w-full md:h-14">
          <path
            d="M0 0H1440V22L720 60L0 22V0Z"
            className="fill-[#F8F7F3] dark:fill-[#0C1E21] transition-colors duration-300"
          />
          <path
            d="M0 22L720 60L1440 22V64H0V22Z"
            className="fill-[#183E43] dark:fill-[#132E32] transition-colors duration-300"
          />
          <path
            d="M0 22L720 60L1440 22"
            fill="none"
            stroke="#D2B47A"
            strokeWidth="1.5"
            strokeOpacity="0.65"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden bg-[#183E43] dark:bg-[#132E32] transition-colors duration-300"
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 68" preserveAspectRatio="none" className="block h-10 w-full md:h-14">
        <path
          d="M0 16Q360 68 720 34T1440 16V68H0V16Z"
          className="fill-[#F8F7F3] dark:fill-[#0C1E21] transition-colors duration-300"
        />
        <path
          d="M0 16Q360 68 720 34T1440 16"
          fill="none"
          stroke="#D2B47A"
          strokeWidth="1.25"
          strokeOpacity="0.55"
        />
      </svg>
    </div>
  );
}
