import { Injectable } from '@nestjs/common';
import {
  UIMessage,
  ModelMessage,
  convertToModelMessages,
  streamText,
} from 'ai';
import { Response } from 'express';

@Injectable()
export class ChatService {
  async chat(
    messages: UIMessage[],
    model: string,
    response: Response,
  ): Promise<void> {
    const modelMessages: ModelMessage[] =
      await convertToModelMessages(messages);
    const result = streamText({
      model,
      messages: modelMessages,
    });
    result.pipeTextStreamToResponse(response);
  }
}
