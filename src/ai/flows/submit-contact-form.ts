
'use server';
/**
 * @fileOverview A flow to handle contact form submissions.
 *
 * - submitContactForm - A function that handles the contact form submission process.
 * - ContactFormInput - The input type for the submitContactForm function.
 * - ContactFormOutput - The return type for the submitContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe("The sender's name."),
  email: z.string().email().describe("The sender's email address."),
  message: z.string().describe("The content of the message."),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  reply: z.string().describe("A confirmation reply to the user."),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function submitContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return submitContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are a personal assistant for Mitadru Roy, a skilled Full-Stack Developer.
  A new message has arrived from the portfolio contact form.
  
  Sender Name: {{{name}}}
  Sender Email: {{{email}}}
  Message:
  "{{{message}}}"

  Your only task is to generate a brief, friendly, and professional confirmation message to be shown to the user after they submit the form.
  Acknowledge the sender by name and confirm that Mitadru has received their message and will get back to them shortly.
  Do not repeat the user's message. Keep the reply under 25 words.
  `,
});

const submitContactFormFlow = ai.defineFlow(
  {
    name: 'submitContactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // In a real application, you would add logic here to send an email,
    // save to a database, or trigger a notification.
    console.log(`New contact form submission from ${input.name} (${input.email})`);
    
    const {output} = await prompt(input);
    return output!;
  }
);
