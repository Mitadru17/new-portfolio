'use server';

/**
 * @fileOverview An AI agent that generates a fun AI animation easter egg, triggered by a specific input, showcasing AI skills in a creative way.
 *
 * - generateProjectDescription - A function that handles the project description generation process.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  keyword: z
    .string()
    .describe("The keyword that triggers the AI animation easter egg."),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  animationDataUri: z
    .string()
    .describe("The data URI of the AI animation, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an AI that generates a fun AI animation easter egg in SVG format.

  The animation should be triggered by the keyword: {{{keyword}}}.

  The SVG should be a creative, abstract, and futuristic animation that is visually interesting. It should be a looping animation. The design should be minimalist and elegant, using a color palette that matches a professional tech portfolio (purples, teals, dark backgrounds).

  Return the animation as a data URI (data:image/svg+xml;base64,...).
  
  Do not include any text, just the data URI in the output.`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
