# @mihanizm56/compression
## Что такое?
Это набор node.js скриптов, используемых для сжатия файлов фронтенд-статики в gzip и brotli.

## Как использовать
```bash
npx @mihanizm56/compression --gzip --dir='["test-folder","test-folder/static/js", "test-folder/static/css", "test-folder/_assets"]' --brotli
```

## Флаги
 - gzip - добавляется gzip сжатие (по умолчанию уровень сжатия 9)
 - brotli - добавляется brotli сжатие (по умолчанию уровень сжатия 11)
 - gzip-level - уровень сжатия gzip
 - brotli-level - уровень сжатия brotli
 - dir - массив директорий, файлы в которых нужно сжимать

 ## Какие файлы сжимаются:
 - js
 - json
 - html
 - css
 - txt