import axios from 'axios';
import { ChatPostMessageArguments } from '@slack/web-api';


const {
  SLACK_HOOK_URL: SlackURL
} = process.env

type SlackPostData = Pick<ChatPostMessageArguments, 'text' | 'blocks'>;

async function post(data: SlackPostData) {
  if (!SlackURL)
    throw new Error('Missing SLACK_HOOK_URL variable');

  await axios.post(SlackURL, data);
}

async function main() {
  await post({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This is a test of the Beacon cron job.',
        },
      }
    ]
  })
}


main()
