import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  const faqs = [
    {
      question: "What is Lnkshop?",
      answer:
        "Lnkshop is a link-in-bio sales aggregation tool that helps creators and businesses turn their social media bio into a sleek, shoppable hub. It allows you to showcase your products, services, and content in one place with smart previews and analytics.",
    },
    {
      question: "How does Lnkshop differ from other link-in-bio tools?",
      answer:
        "Lnkshop is specifically designed for sales conversion, with features like smart previews, click analytics, and customizable layouts. We focus on helping you turn your social media followers into customers with a seamless shopping experience.",
    },
    {
      question: "Can I use my own domain with Lnkshop?",
      answer:
        "Yes, our Pro and Business plans allow you to use your own custom domain for a more professional and branded experience.",
    },
    {
      question: "How do I set up my Lnkshop page?",
      answer:
        "Setting up your Lnkshop page is easy. After signing up, you'll choose a username, add your links, customize your design, and you're ready to go. The entire process takes just a few minutes.",
    },
    {
      question: "What analytics does Lnkshop provide?",
      answer:
        "Lnkshop provides detailed analytics on link clicks, visitor demographics, traffic sources, and conversion rates. This helps you understand which links are performing best and optimize your storefront accordingly.",
    },
    {
      question: "Can I customize the appearance of my Lnkshop page?",
      answer:
        "You can choose from different layouts (list, grid, or carousel), customize colors, add your logo, and more to match your brand identity.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "Yes, we offer a free plan with basic features to help you get started. You can upgrade to a paid plan anytime to access more advanced features.",
    },
    {
      question: "How do I add links to my Lnkshop page?",
      answer:
        "In your dashboard, simply click the 'Add Link' button, enter the URL, and Lnkshop will automatically generate a preview. You can then customize the title and image if needed.",
    },
    {
      question: "Can I reorder my links?",
      answer: "Yes, you can easily drag and drop your links to reorder them in your dashboard.",
    },
    {
      question: "Does Lnkshop work with all social media platforms?",
      answer:
        "Yes, Lnkshop works with any platform that allows you to add a link in your bio, including Instagram, TikTok, Twitter, YouTube, and more.",
    },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Find answers to common questions about Lnkshop and how it can help you grow your business.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Still have questions?</p>
        <Button className="bg-teal-600 hover:bg-teal-700">Contact Support</Button>
      </div>
    </div>
  )
}

