#!/bin/bash

# Rodar o build do projeto
npm run build

# Fazer commit das mudanças
git add -A
git commit -m "deploy"

# Push para o branch gh-pages
git push -f origin master:gh-pages