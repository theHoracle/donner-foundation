import Hero from "@/components/Hero"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FaqPage = () => {
    const faqs = [
        {
            question: 'A man did not put his name on his company, would he still own the company?',
            answer: 'Because he had it on a little piece of paper, so he is a bit safe'
        },
        {
            question: 'A man did not put his name on his company, would he still own the company?',
            answer: 'Because he had it on a little piece of paper, so he is a bit safe'
        },
        {
            question: 'A man did not put his name on his company, would he still own the company?',
            answer: 'Because he had it on a little piece of paper, so he is a bit safe'
        }
    ]
    return <main className="flex flex-col">
        <Hero heroText="Frequently Asked Questions" topic="FAQs" />
    <MaxWidthWrapper>
        <div className="my-20">
            <h3 className=""></h3>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => {
                    return (
                        <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger> {faq.question} </AccordionTrigger>
                        <AccordionContent> {faq.answer} </AccordionContent>
                    </AccordionItem>
                )
            })}
            </Accordion>
        </div>
    </MaxWidthWrapper>
            </main>
}

export default FaqPage