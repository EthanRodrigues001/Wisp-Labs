"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Features", href: "#" },
  { name: "Solution", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <svg
                    width="100"
                    height="45"
                    viewBox="0 0 784 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_0_1)">
                      <mask
                        id="mask0_0_1"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="200"
                        height="200"
                      >
                        <path d="M200 0H0V200H200V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_0_1)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M181.596 99.578C180.202 99.8548 178.761 100 177.286 100H122.714C110.564 100 100.714 109.85 100.714 122V178C100.714 179.224 100.614 180.425 100.422 181.595C100.145 180.201 100 178.761 100 177.286V122.714C100 110.564 90.1503 100.714 78 100.714H22C20.7759 100.714 19.5751 100.614 18.4054 100.422C19.7988 100.145 21.2396 100 22.7143 100H77.2857C89.436 100 99.2857 90.1503 99.2857 78V22C99.2857 20.4993 99.4949 20.0405 99.8786 20.3892C98.7171 9.33185 89.365 0.714233 78 0.714233H22C9.84974 0.714233 0 10.564 0 22.7143V78.7143C0 89.6403 7.96503 98.706 18.4054 100.422C8.31817 102.425 0.714259 111.325 0.714259 122L0.714256 178C0.714256 190.15 10.564 200 22.7143 200H78.7143C89.6403 200 98.7059 192.035 100.422 181.595C102.425 191.682 111.325 199.286 122 199.286H178C190.15 199.286 200 189.436 200 177.286V121.286C200 110.36 192.035 101.294 181.596 99.578Z"
                          fill="#EBEBEB"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M99.5058 22.7143C99.5058 21.9289 99.4647 21.1532 99.3844 20.3892C100.272 21.1955 102.092 26.3206 104.417 32.864C109.225 46.3983 116.188 65.9999 121.506 65.9999C125.204 65.9999 127.467 63.0454 130.133 59.5642C133.956 54.5733 138.607 48.4999 149.506 48.4999C160.011 48.4999 163.929 54.143 167.316 59.0202C169.893 62.7318 172.162 65.9999 176.792 65.9999C183.498 65.9999 190.427 44.0039 194.674 30.525C197.212 22.4682 198.792 17.4544 198.792 22V78C198.792 88.6752 191.188 97.5745 181.102 99.578C179.932 99.3856 178.73 99.2856 177.506 99.2856H121.506C109.356 99.2856 99.5058 89.4359 99.5058 77.2856V22.7143Z"
                          fill="#BABBBB"
                        />
                      </g>
                    </g>
                    <path
                      d="M233.876 56.68C233.62 55.7413 237.929 55.272 246.804 55.272C256.617 55.272 261.652 56.0827 261.908 57.704L268.18 111.592L281.748 57.064C282.174 55.784 285.502 55.144 291.732 55.144C297.961 55.144 301.289 55.7413 301.715 56.936L315.028 111.848L322.452 57.448C322.622 56.5093 324.585 55.8693 328.34 55.528C332.094 55.1867 335.124 55.016 337.428 55.016C346.388 55.016 350.74 55.6133 350.484 56.808L334.996 141.672C334.654 142.952 332.222 143.891 327.7 144.488C323.177 145.085 319.508 145.384 316.692 145.384C306.11 145.384 300.564 144.189 300.052 141.8L291.348 106.6L281.876 141.672C281.534 143.208 278.548 144.317 272.916 145C270.014 145.256 267.113 145.384 264.212 145.384L256.02 145C250.388 144.403 247.401 143.336 247.06 141.8L233.876 56.68ZM382.372 144.232C382.372 144.915 378.446 145.256 370.596 145.256C362.83 145.256 358.948 144.957 358.948 144.36V81.512C358.948 80.9147 362.83 80.616 370.596 80.616C378.446 80.616 382.372 80.872 382.372 81.384V144.232ZM382.372 73.832C382.372 74.4293 378.446 74.728 370.596 74.728C362.83 74.728 358.948 74.472 358.948 73.96V55.528C358.948 54.6747 362.83 54.248 370.596 54.248C378.446 54.248 382.372 54.504 382.372 55.016V73.832ZM396.635 121.96C403.547 126.141 409.009 128.232 413.02 128.232C415.58 128.232 416.86 127.336 416.86 125.544C416.86 124.264 414.641 122.6 410.204 120.552C399.537 116.2 394.204 109.075 394.204 99.176C394.204 92.8613 396.508 88.04 401.116 84.712C405.724 81.384 411.228 79.72 417.628 79.72C424.113 79.72 429.574 80.4027 434.012 81.768C438.534 83.1333 440.796 84.9253 440.796 87.144C440.796 89.0213 439.857 91.496 437.98 94.568C436.188 97.64 434.95 99.304 434.268 99.56C430.598 97.512 426.63 96.488 422.364 96.488C420.06 96.488 418.908 97.2987 418.908 98.92C418.908 99.944 419.334 100.84 420.188 101.608C421.126 102.291 422.79 103.187 425.18 104.296C427.569 105.32 429.532 106.259 431.068 107.112C432.689 107.965 434.481 109.16 436.444 110.696C440.54 113.939 442.588 118.163 442.588 123.368C442.588 130.195 440.326 135.741 435.804 140.008C431.281 144.189 424.454 146.28 415.324 146.28C409.265 146.28 403.761 145.256 398.812 143.208C393.862 141.16 391.388 138.344 391.388 134.76C391.388 132.371 391.942 129.853 393.052 127.208C394.246 124.563 395.441 122.813 396.635 121.96ZM479.093 168.296C479.093 168.893 475.423 169.192 468.085 169.192C460.831 169.192 457.205 168.893 457.205 168.296V102.376H452.853C450.805 102.376 449.397 100.499 448.629 96.744C448.373 95.5493 448.245 94.0133 448.245 92.136C448.245 90.2587 448.842 88.04 450.036 85.48C451.743 81.7253 454.474 79.848 458.229 79.848C460.703 79.848 462.965 80.4453 465.013 81.64C467.146 82.7493 468.597 83.816 469.365 84.84C470.218 85.7787 470.645 86.3333 470.645 86.504C476.362 82.0667 482.549 79.848 489.205 79.848C495.861 79.848 501.578 82.4507 506.357 87.656C511.135 92.776 513.525 100.755 513.525 111.592C513.525 122.344 511.135 130.707 506.357 136.68C501.578 142.568 495.519 145.512 488.181 145.512C484.853 145.512 481.823 145.341 479.093 145V168.296ZM484.341 102.248C482.89 102.248 481.482 102.717 480.117 103.656V126.312C481.567 126.483 482.719 126.568 483.573 126.568C484.511 126.568 485.237 126.568 485.749 126.568C489.247 126.227 490.997 121.747 490.997 113.128C490.997 105.875 488.778 102.248 484.341 102.248ZM546.058 137.448V57.832C546.058 56.04 550.367 55.144 558.986 55.144C567.69 55.144 572.042 56.04 572.042 57.832V120.552H591.754C593.29 120.552 594.356 122.557 594.954 126.568C595.21 128.531 595.338 130.536 595.338 132.584C595.338 134.632 595.21 136.723 594.954 138.856C594.271 142.952 593.162 145 591.626 145H552.202C550.324 145 548.831 144.232 547.722 142.696C546.612 141.16 546.058 139.411 546.058 137.448ZM610.387 98.536C607.997 94.2693 606.803 90.8133 606.803 88.168C606.803 85.4373 607.528 83.688 608.979 82.92C613.843 80.7867 620.499 79.72 628.947 79.72C637.48 79.72 643.496 81.7253 646.995 85.736C650.493 89.6613 652.243 95.5067 652.243 103.272V123.496H656.595C658.045 123.496 659.155 124.349 659.923 126.056C660.776 127.763 661.202 130.109 661.202 133.096C661.202 136.083 660.435 139.027 658.899 141.928C657.448 144.829 655.443 146.28 652.883 146.28C648.275 146.28 644.563 145.043 641.747 142.568C640.467 141.544 639.485 140.307 638.803 138.856C634.877 143.805 628.776 146.28 620.499 146.28C614.269 146.28 609.021 144.061 604.755 139.624C600.488 135.187 598.355 129.939 598.355 123.88C598.355 109.971 606.675 103.016 623.315 103.016H630.354V101.736C630.354 99.5173 629.971 98.1093 629.203 97.512C628.52 96.8293 626.856 96.488 624.211 96.488C620.968 96.488 616.36 97.1707 610.387 98.536ZM620.627 122.088C620.627 123.965 621.139 125.416 622.163 126.44C623.187 127.379 624.467 127.848 626.003 127.848C627.624 127.848 629.075 127.208 630.354 125.928V116.072H626.771C622.675 116.072 620.627 118.077 620.627 122.088ZM669.088 55.784C669.088 54.76 672.757 54.248 680.096 54.248C687.52 54.248 691.232 54.8027 691.232 55.912V80.744C694.901 80.0613 697.504 79.72 699.04 79.72C716.96 79.72 725.92 90.0027 725.92 110.568C725.92 122.003 723.146 130.835 717.6 137.064C712.138 143.208 704.33 146.28 694.176 146.28C684.106 146.28 675.744 144.019 669.088 139.496V55.784ZM695.456 99.688C694.005 99.688 692.597 100.157 691.232 101.096V125.544C692.426 126.056 693.664 126.312 694.944 126.312C696.309 126.312 697.674 125.8 699.04 124.776C701.429 123.069 702.624 119.101 702.624 112.872C702.624 104.083 700.234 99.688 695.456 99.688ZM737.635 121.96C744.547 126.141 750.009 128.232 754.02 128.232C756.58 128.232 757.86 127.336 757.86 125.544C757.86 124.264 755.641 122.6 751.204 120.552C740.537 116.2 735.204 109.075 735.204 99.176C735.204 92.8613 737.508 88.04 742.116 84.712C746.724 81.384 752.228 79.72 758.628 79.72C765.113 79.72 770.574 80.4027 775.012 81.768C779.534 83.1333 781.796 84.9253 781.796 87.144C781.796 89.0213 780.857 91.496 778.98 94.568C777.188 97.64 775.95 99.304 775.268 99.56C771.598 97.512 767.63 96.488 763.364 96.488C761.06 96.488 759.908 97.2987 759.908 98.92C759.908 99.944 760.334 100.84 761.188 101.608C762.126 102.291 763.79 103.187 766.18 104.296C768.569 105.32 770.532 106.259 772.068 107.112C773.689 107.965 775.481 109.16 777.444 110.696C781.54 113.939 783.588 118.163 783.588 123.368C783.588 130.195 781.326 135.741 776.804 140.008C772.281 144.189 765.454 146.28 756.324 146.28C750.265 146.28 744.761 145.256 739.812 143.208C734.862 141.16 732.388 138.344 732.388 134.76C732.388 132.371 732.942 129.853 734.052 127.208C735.246 124.563 736.441 122.813 737.635 121.96Z"
                      fill="#EBEBEB"
                    />
                    <defs>
                      <clipPath id="clip0_0_1">
                        <rect width="200" height="200" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="#">
                      <span>Login</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          aria-hidden
          className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Building Scalable Digital Experiences
              </h1>
              <p className="mx-auto my-8 max-w-2xl text-xl">
                We craft modern, high-performance websites tailored for global
                impact — built for speed, scale, and seamless user experience.
              </p>

              <Button asChild size="lg">
                <Link href="https://cal.com/wisplabs/30min?overlayCalendar=true&layout=column_view">
                  <span className="btn-label">🚀 Let’s Build Your Vision</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto -mt-16 max-w-7xl">
            <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
              <div className="[transform:rotateX(20deg);]">
                <div className="lg:h-176 relative skew-x-[.36rad]">
                  <div
                    aria-hidden
                    className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
                  />
                  <div
                    aria-hidden
                    className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
                  />

                  <div
                    aria-hidden
                    className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
                  />
                  <div
                    aria-hidden
                    className="from-background z-11 absolute inset-0 bg-gradient-to-l"
                  />
                  <div
                    aria-hidden
                    className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                  />
                  <div
                    aria-hidden
                    className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                  />

                  <Image
                    className="rounded-(--radius) z-1 relative border dark:hidden"
                    src="/hero.webp"
                    alt="Tailark hero section"
                    width={2880}
                    height={2074}
                  />
                  <Image
                    className="rounded-(--radius) z-1 relative hidden border dark:block"
                    src="/hero.webp"
                    alt="Tailark hero section"
                    width={2880}
                    height={2074}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
