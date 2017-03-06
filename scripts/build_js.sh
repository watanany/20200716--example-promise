#!/bin/bash

builddir=build
rm -rf $builddir

targets=`find . -type d \( -name node_modules -o -name $builddir \) -prune -o -type f -name '*.js' -print`;

for file in $targets
do
  to=$builddir/`dirname $file`
  [ ! -x $to ] && mkdir -p $to
  ./node_modules/.bin/babel $file -o $builddir/$file
done
