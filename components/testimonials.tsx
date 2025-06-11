export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl">
              <blockquote>
                <p className="text-lg font-semibold sm:text-xl md:text-3xl">
                  Building with modern UI frameworks allows us to deliver
                  stunning, responsive websites that not only look great — but
                  perform brilliantly across devices, for clients worldwide.
                </p>

                <div className="mt-12 flex items-center gap-6">
                  <img
                    className="h-7 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                  <div className="space-y-1 border-l pl-6">
                    <cite className="font-medium">John Doe</cite>
                    <span className="text-muted-foreground block text-sm">
                      CEO, Nvidia
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
