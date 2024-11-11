import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-post";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
  return (
    <section className="py-24">
    <div className="container max-w-3xl">
   <Intro/>


   <RecentProjects/>

   <RecentPosts/>
    </div>
    </section>
  );
}
