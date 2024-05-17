import {BlogCard} from '../components/BlogCard'
import { Appbar } from '../components/Appbar'
import { useBlogs } from '../hooks'
import { BlogSkeleton } from '../components/BlogSkeleton';
export function Blogs(){
    const {loading,blogs} = useBlogs();
    if(loading){
        return <div>
        <Appbar/>
        <div className='m-20'>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
        </div>
    }

    return <div>
        <Appbar/>
    <div className='flex justify-center'>
        {/* <div className='max-w-xl'> */}
        <div className=''>
            {blogs.map((blog)=>{
                return <BlogCard 
                id={blog.id}
                authorName={blog.author.name || 'Anonymous'}
                title={blog.title}
                content={blog.content}
                publishedDate={`10 Jan 2024`}/>
            })}
            {/* <BlogCard authorName={`Aryan Sindhi`}
            title={`How an ugly single page website make 5000$ a month without affiliate marketing?`}
            content={`In the vast landscape of online entrepreneurship, success stories often highlight sleek, visually stunning websites raking in substantial revenue through various channels like affiliate marketing, sponsored content, or e-commerce. However, there exists a lesser-known tale of a simple, unassuming single-page website defying conventional wisdom and generating a steady income of $5000 per month without relying on affiliate marketing tactics.

            The Journey Begins
            Our story begins with a passionate individual, let's call him Alex, who harbored a keen interest in a niche hobby—collecting vintage vinyl records. Rather than aiming for grandeur, Alex decided to create a straightforward website dedicated to sharing his love for vinyl records with the world. With minimal coding skills and a shoestring budget, he pieced together a basic single-page website using free website builders and templates available online.
            
            The Ugly Duckling Emerges
            Describing Alex's website as "ugly" would be an understatement. The design was rudimentary at best, lacking the sleek aesthetics commonly associated with successful online ventures. However, what it lacked in visual appeal, it compensated for in authenticity and valuable content. The website featured Alex's personal insights, detailed reviews of rare vinyl records, and curated playlists, all presented in a straightforward manner.
            
            Navigating the Monetization Maze
            Unlike many online ventures, Alex deliberately avoided the allure of affiliate marketing and opted for alternative monetization strategies. Instead, he focused on building a loyal community around his niche hobby. Leveraging his expertise and passion, Alex offered premium membership plans granting exclusive access to in-depth guides, live streaming sessions, and personalized recommendations.
            
            The Power of Niche Authority
            As Alex's website gained traction within the vinyl enthusiasts' community, its reputation as a trusted source of information grew exponentially. Visitors appreciated the authenticity and depth of knowledge conveyed through Alex's content. Word-of-mouth referrals and organic traffic became the primary drivers of growth, solidifying the website's position as a niche authority.
            
            Monetizing Community Engagement
            With a dedicated following in place, Alex introduced additional revenue streams tailored to his audience's preferences. Specialized workshops, virtual record fairs, and limited edition merchandise became highly sought-after offerings among the community members. The website's revenue soared as passionate enthusiasts eagerly embraced these exclusive opportunities.
            
            Conclusion: Beauty Lies in Authenticity
            In the realm of online entrepreneurship, success is often equated with visual appeal and sophisticated marketing strategies. However, Alex's journey serves as a poignant reminder that true success transcends aesthetics. By prioritizing authenticity, valuable content, and community engagement, Alex transformed his humble single-page website into a thriving online venture, proving that beauty truly lies in the eye of the beholder.
            
            Aspiring entrepreneurs can draw inspiration from Alex's story, recognizing that genuine passion and expertise can pave the path to sustainable success, even in the absence of traditional marketing gimmicks. In a world enamored by outward appearances, Alex's tale stands as a testament to the enduring power of authenticity in the digital age.`}
            publishedDate={`10 Jan 2024`}/>
            <BlogCard authorName={`Aryan Sindhi`}
            title={`How an ugly single page website make 5000$ a month without affiliate marketing?`}
            content={`In the vast landscape of online entrepreneurship, success stories often highlight sleek, visually stunning websites raking in substantial revenue through various channels like affiliate marketing, sponsored content, or e-commerce. However, there exists a lesser-known tale of a simple, unassuming single-page website defying conventional wisdom and generating a steady income of $5000 per month without relying on affiliate marketing tactics.

            The Journey Begins
            Our story begins with a passionate individual, let's call him Alex, who harbored a keen interest in a niche hobby—collecting vintage vinyl records. Rather than aiming for grandeur, Alex decided to create a straightforward website dedicated to sharing his love for vinyl records with the world. With minimal coding skills and a shoestring budget, he pieced together a basic single-page website using free website builders and templates available online.
            
            The Ugly Duckling Emerges
            Describing Alex's website as "ugly" would be an understatement. The design was rudimentary at best, lacking the sleek aesthetics commonly associated with successful online ventures. However, what it lacked in visual appeal, it compensated for in authenticity and valuable content. The website featured Alex's personal insights, detailed reviews of rare vinyl records, and curated playlists, all presented in a straightforward manner.
            
            Navigating the Monetization Maze
            Unlike many online ventures, Alex deliberately avoided the allure of affiliate marketing and opted for alternative monetization strategies. Instead, he focused on building a loyal community around his niche hobby. Leveraging his expertise and passion, Alex offered premium membership plans granting exclusive access to in-depth guides, live streaming sessions, and personalized recommendations.
            
            The Power of Niche Authority
            As Alex's website gained traction within the vinyl enthusiasts' community, its reputation as a trusted source of information grew exponentially. Visitors appreciated the authenticity and depth of knowledge conveyed through Alex's content. Word-of-mouth referrals and organic traffic became the primary drivers of growth, solidifying the website's position as a niche authority.
            
            Monetizing Community Engagement
            With a dedicated following in place, Alex introduced additional revenue streams tailored to his audience's preferences. Specialized workshops, virtual record fairs, and limited edition merchandise became highly sought-after offerings among the community members. The website's revenue soared as passionate enthusiasts eagerly embraced these exclusive opportunities.
            
            Conclusion: Beauty Lies in Authenticity
            In the realm of online entrepreneurship, success is often equated with visual appeal and sophisticated marketing strategies. However, Alex's journey serves as a poignant reminder that true success transcends aesthetics. By prioritizing authenticity, valuable content, and community engagement, Alex transformed his humble single-page website into a thriving online venture, proving that beauty truly lies in the eye of the beholder.
            
            Aspiring entrepreneurs can draw inspiration from Alex's story, recognizing that genuine passion and expertise can pave the path to sustainable success, even in the absence of traditional marketing gimmicks. In a world enamored by outward appearances, Alex's tale stands as a testament to the enduring power of authenticity in the digital age.`}
            publishedDate={`10 Jan 2024`}/>
            <BlogCard authorName={`Aryan Sindhi`}
            title={`How an ugly single page website make 5000$ a month without affiliate marketing?`}
            content={`In the vast landscape of online entrepreneurship, success stories often highlight sleek, visually stunning websites raking in substantial revenue through various channels like affiliate marketing, sponsored content, or e-commerce. However, there exists a lesser-known tale of a simple, unassuming single-page website defying conventional wisdom and generating a steady income of $5000 per month without relying on affiliate marketing tactics.

            The Journey Begins
            Our story begins with a passionate individual, let's call him Alex, who harbored a keen interest in a niche hobby—collecting vintage vinyl records. Rather than aiming for grandeur, Alex decided to create a straightforward website dedicated to sharing his love for vinyl records with the world. With minimal coding skills and a shoestring budget, he pieced together a basic single-page website using free website builders and templates available online.
            
            The Ugly Duckling Emerges
            Describing Alex's website as "ugly" would be an understatement. The design was rudimentary at best, lacking the sleek aesthetics commonly associated with successful online ventures. However, what it lacked in visual appeal, it compensated for in authenticity and valuable content. The website featured Alex's personal insights, detailed reviews of rare vinyl records, and curated playlists, all presented in a straightforward manner.
            
            Navigating the Monetization Maze
            Unlike many online ventures, Alex deliberately avoided the allure of affiliate marketing and opted for alternative monetization strategies. Instead, he focused on building a loyal community around his niche hobby. Leveraging his expertise and passion, Alex offered premium membership plans granting exclusive access to in-depth guides, live streaming sessions, and personalized recommendations.
            
            The Power of Niche Authority
            As Alex's website gained traction within the vinyl enthusiasts' community, its reputation as a trusted source of information grew exponentially. Visitors appreciated the authenticity and depth of knowledge conveyed through Alex's content. Word-of-mouth referrals and organic traffic became the primary drivers of growth, solidifying the website's position as a niche authority.
            
            Monetizing Community Engagement
            With a dedicated following in place, Alex introduced additional revenue streams tailored to his audience's preferences. Specialized workshops, virtual record fairs, and limited edition merchandise became highly sought-after offerings among the community members. The website's revenue soared as passionate enthusiasts eagerly embraced these exclusive opportunities.
            
            Conclusion: Beauty Lies in Authenticity
            In the realm of online entrepreneurship, success is often equated with visual appeal and sophisticated marketing strategies. However, Alex's journey serves as a poignant reminder that true success transcends aesthetics. By prioritizing authenticity, valuable content, and community engagement, Alex transformed his humble single-page website into a thriving online venture, proving that beauty truly lies in the eye of the beholder.
            
            Aspiring entrepreneurs can draw inspiration from Alex's story, recognizing that genuine passion and expertise can pave the path to sustainable success, even in the absence of traditional marketing gimmicks. In a world enamored by outward appearances, Alex's tale stands as a testament to the enduring power of authenticity in the digital age.`}
            publishedDate={`10 Jan 2024`}/> */}
        </div>
    </div> 
    </div> 
}