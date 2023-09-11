Run `nx run ngu-api:serve-ssr` to serve.
~Run `nx run ngu-nx2:serve-ssr` to serve~

## TODO
- [OK] Move NestJS to standalone app
    Run `nx g @nx/nest:app ngu-api --directory=apps/ngu-api --frontendProject ngu-nx2`
- [ ] Investigate broken serve
  Broken: 
  The serve crashes after a few seconds with "connect ECONNREFUSED ::1:60430" (different port every time). I think it's a debugger-port issue. Will investigate later.
