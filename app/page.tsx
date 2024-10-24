import { Main, Section, Container, Box } from "@/components/craft";
import Feature from "@/components/homepage/feature";
import Feature2 from "@/components/homepage/feature2";
import Hero from "@/components/homepage/hero";
import { ModeToggle } from "@/components/mode-toggle";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
         
         <Hero/>
         <Feature/>
         <Feature2/>
        </Container>
      </Section>
    </Main>
  );
}
