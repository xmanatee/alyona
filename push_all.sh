#!/bin/bash

git status \
    && git add -A \
    && git commit -m "pushed through script" \
    && git push
