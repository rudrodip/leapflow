import PersonProfile from "@/components/person-profile";
import { team } from "@/constants/team";
import { advisors } from "@/constants/advisor";
import { BackgroundBeams } from "@/components/background-beams";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-themeBackground">
      <div className="w-full max-w-5xl mx-auto px-3 md:px-2 py-12 md:py-24">
        <BackgroundBeams className="translate-y-20" />
        <h1 className="head-text">Our mission</h1>
        <div className="space-y-8 mt-5">
          <p className="text-muted-foreground text-lg max-w-xl">
            We see the inefficiencies in today&apos;s workflows – the manual tasks,
            the disjointed processes, the wasted time in repetitive tasks.
            That&apos;s why we&apos;ve set out to transform the way you work.
          </p>
          <p className="text-muted-foreground text-lg max-w-lg">
            Our agents seamlessly integrate with your existing software,
            automating your workflows and repetitive tasks, so you can focus on
            what matters most.
          </p>
        </div>
        <h1 className="head-text mt-16">Team</h1>
        <p className="text-muted-foreground text-lg max-w-lg mt-5">
          We are a passionate team of developers & designers, working together to
          make tasks easier with smart automations.
        </p>
        <div id="team" className="w-full max-w-4xl flex flex-wrap my-12 gap-x-3 md:gap-x-5 lg:gap-x-10 gap-y-10">
          {team.map((profile, index) => (
            <PersonProfile key={index} {...profile} />
          ))}
        </div>
        <h1 className="head-text mt-20">Advisors</h1>
        <div id="team" className="w-auto max-w-4xl flex justify-start flex-wrap my-12 gap-x-5 lg:gap-x-10 gap-y-10">
          {advisors.map((profile, index) => (
            <PersonProfile key={index} {...profile} />
          ))}
        </div>
      </div>
    </main>
  );
}
