// @project
import { Feature11 } from '@/blocks/feature';

/***************************  FEATURE 11 - DATA  ***************************/

const data = {
  heading: 'Streamline Your Business with Our CRM Solution',
  caption: 'Discover the features that will transform your customer relationships',
  image: { light: '/assets/images/graphics/ai/desktop1-light.svg', dark: '/assets/images/graphics/ai/desktop1-dark.svg' },
  features: [
    {
      icon: 'custom-brain',
      title: 'AI-Powered Analytics',
      content: 'Leverage AI for Predictive Insights and Sales Opportunities.'
    },
    {
      icon: 'custom-path',
      title: 'Journey Mapping',
      content: 'Customer experiences at every touchpoint with it.'
    },
    {
      icon: 'custom-statastic',
      title: 'Voice & Speech Analytics',
      content: 'Actionable insights from customer interactions through it.'
    },
    {
      icon: 'custom-remote',
      title: 'Sales Gamification',
      content: 'Boost sales team motivation and performance with it.'
    },
    {
      icon: 'custom-lock',
      title: 'Subscription Management',
      content: 'Effortlessly handle and optimize subscriptions with it.'
    },
    {
      icon: 'custom-interface',
      title: 'Intuitive Interface',
      content: 'Simplify user interactions & enhance usability with it.'
    }
  ]
};

/***************************  BLOCK - FEATURE 11  ***************************/

export default function BlockFeature11() {
  return <Feature11 {...data} />;
}
