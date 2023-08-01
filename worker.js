// this is the cloudflare worker script
import template from './index.html';

export default {
  async fetch(request, env, ctx) {
    return new Response(template,{  headers: { 'Content-Type': 'text/html' }});
  },
};
