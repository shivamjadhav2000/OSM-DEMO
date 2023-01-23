#!/usr/bin/env sh
# abort on errorsset -e
# buildyarn run build
# navigate into the build output directorycd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git initgit add -A
git commit -m 'deploy'
git push -f git@github.com:shivamjadhav2000/OSM-DEMO.git main:gh-pages
cd -