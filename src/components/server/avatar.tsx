import Image from "next/image";

import { delay } from "@/lib/utils";

export async function Avatar() {

    // random string
    const random = Math.random().toString(36).substring(7);

    // Simulate asynchronous delay
    await delay(250);

  return (
    <Image 
        src={`/${random}?size=250`} className="rounded-md" 
        width={250} 
        height={250} 
        alt="Avatar" 
        priority={true} 
        quality={95} 
    />
  );
}