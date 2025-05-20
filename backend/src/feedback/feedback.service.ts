import { Injectable } from "@nestjs/common";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";

@Injectable()
export class FeedbackService {
  private feedbacks: CreateFeedbackDto[] = [];
  create(dto: CreateFeedbackDto) {
    this.feedbacks.push(dto);
    return { message: "Feedback received", data: dto };
  }
}
