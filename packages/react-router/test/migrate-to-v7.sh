#!/bin/bash

# Script to migrate React Router v5 syntax to v7 in test base files

# Fix component prop -> element prop with JSX element
# This handles: component={Component} -> element={<Component />}
find test/base/src -name "*.tsx" -type f -exec perl -i -pe 's/component=\{([A-Za-z0-9_]+)\}/element={<$1 \/>}/g' {} \;

# Fix Navigate from prop (v7 doesn't support 'from', need to use Route wrapper instead)
# Navigate with 'from' should become Route with Navigate as element
# This is more complex and may need manual fixes for edge cases

echo "Migration complete. Please review the changes and fix any remaining issues manually."
