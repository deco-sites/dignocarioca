import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  /** @format rich-text */
  title?: string;
  /** @format textarea */
  description?: string;
  description1?: string;
  description2?: string;
  /** @format rich-text */
  quote?: string;
  autor?: string;
  tagline?: string;
  background?: ImageWidget;
  image?: ImageWidget;
  image2?: ImageWidget;
  highlight?: ImageWidget;
  frame?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}


const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  tagline = "Tagline",
  background = DEFAULT_IMAGE,
  autor='Rio de Janeiro Lover',
  description1 = "Here's an intermediate size heading you can edit",
  description2 = "Here's an intermediate size heading you can edit",
  quote = "Cidade maravilhosa, onde cada esquina é um pedaço de poesia.",
  image = DEFAULT_IMAGE,
  image2 = DEFAULT_IMAGE,
  highlight = DEFAULT_IMAGE,
  frame = DEFAULT_IMAGE,
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", style: "Outline" },
    { id: "change-me-2", href: "/", text: "Change me", style: "Ghost" },
  ],
}: Props) {
  return (
    <div class="my-9 lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div
        class={`flex flex-row-reverse justify-between`}
      >
        <div class="w-7/12 grid  grid-cols-3 grid-rows-3 border border-secondary rounded-lg overflow-hidden"
          style={background ? {
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'

          } : ''}>
          <Image
            width={640}
            height={640}
            class="object-fit aspect-square z-20 w-full row-start-2 col-start-1 transition ease-in-out"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
          <Image
            width={640}
            height={640}
            class="object-fit aspect-square z-20 w-full row-start-3 col-start-2  transition ease-in-out"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image2}
            alt={image2}
            decoding="async"
            loading="lazy"
          />
          <div class="aspect-square p-3 duration-200 object-fit w-full z-10 row-start-2 col-start-1 bg-[#ffd322]">
            <p class="leading-normal">
              {description1}
            </p>
          </div>
          <div class="aspect-square p-3 duration-200 object-fit z-10 row-start-3 col-start-2 bg-[#fe851a]">
            <p class="leading-normal">
              {description2}
            </p>
          </div>
          <div class="p-3 py-5 duration-200 object-fit w-full z-10 py-4 row-start-4 row-span-2 col-start-1 col-span-3 bg-teal-400">
            <p class="text-white ml-4 pl-4 border-white leading-normal text-5xl border-l font-['Yesteryear']">
              {quote} 
            </p>
            <p class="text-white ml-4 pl-4 border-white leading-normal text-2xl pt-3 border-l">
              {autor}
            </p>
          </div>
        </div>
        <div class="pt-7 flex items-start flex-col justify-start w-5/12 md:max-w-xl gap-4 z-10">
          <p class=" text-sm font-semibold pl-2.5 border-l">
            {tagline}
          </p>
          <div class="text-3xl leading-snug pr-2.5" 
          dangerouslySetInnerHTML={{
                __html: title,
              }}>
          </div>
          <p class="leading-normal pr-2.5">
            {description}
          </p>
          <div class="flex gap-3 pt-4">
            {cta?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary
                  ${!item.style || item.style == "Outline" && "btn-outline"}
                  ${item.style == "Ghost" && "btn-ghost"}
                `}
              >
                {item?.text}
                {item.style == "Ghost" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.70697 16.9767L15.414 11.2697L9.70697 5.56274L8.29297 6.97674L12.586 11.2697L8.29297 15.5627L9.70697 16.9767Z"
                      fill="#18181B"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
          <div class="mt-auto relative">
            <Image
              width={640}
              height={640}
              class="  object-fit z-20 w-full"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={highlight}
              alt={highlight}
              decoding="async"
              loading="lazy"
            />
            <Image
              width={640}
              height={640}
              class="mix-blend-lighten absolute top-0 left-0 object-cover z-20 w-full"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={frame}
              alt={frame}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
