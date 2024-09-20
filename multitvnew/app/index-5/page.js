import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home5/Section1"
import Section10 from "@/components/sections/home5/Section10"
import Section2 from "@/components/sections/home5/Section2"
import Section3 from "@/components/sections/home5/Section3"
import Section4 from "@/components/sections/home5/Section4"
import Section5 from "@/components/sections/home5/Section5"
import Section6 from "@/components/sections/home5/Section6"
import Section7 from "@/components/sections/home5/Section7"
import Section8 from "@/components/sections/home5/Section8"
import Section9 from "@/components/sections/home5/Section9"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} logoWhite>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 />
            </Layout>
        </>
    )
}