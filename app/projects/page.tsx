
import Image_Carasouel from "@/components/Image_Carasouel";
import "@/styles/Screen.css"
import { fetchProjects} from "@/lib/data";



export default async function Page() {
  const members = await fetchProjects();

  // [{ "name": "Sean bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Lead dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }];
  return (
    <div className="flex flex-col h-full">
      <div className=" z-10 flex flex-col items-center justify-center gap-10 text-center px-[5vw] mt-10">
        <div className="w-full max-w-[95vw] sm:max-w-5xl rounded-3xl border-black border-4 shadow-lg p-2 bg-gray-700 overflow-hidden" >
          <div className="bg-gray-800 rounded-3xl font-mono text-sm text-primary/90 p-3 sm:p-4 md:p-6 space-y-4">
            <div className="bg-black border p-4 sm:p-6 border-primary/50 overflow-hidden shadow-lg crt flex flex-col">
              <h1 className="text-4xl md:text-5xl font-bold text-green-400 mt-2" style={{ fontFamily: "var(--font-rubik-doodle-shadow)" }}>My Projects</h1>
              <p className="mb-20 mt-10 text-white text-2xl font-extrabold drop-shadow-[0_0_6px_rgba(0,255,0,0.7)]  ">
                A selection of projects created over the past 4 years. Click on one to find out more information!
              </p>
              <Image_Carasouel members={members} />
              <div className="mb-10"></div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

