#!/bin/bash

# 在這裡添加你的文件名
check_file="1 Fork Github Repository da1a0376b862427299b4c27c4264f0e9.md"

if [[ ! -f "$check_file" ]]; then
  echo "File $check_file not found!"
  exit 1
fi

urlencode() {
    perl -MURI::Escape -e 'print uri_escape($ARGV[0]);' "$1"
}

# 設定目錄列表
# directories=("目錄1" "目錄2" "目錄3")
directories=$(ls -d */)


counter=1

# 變更目錄名稱、檔名以及檔案內容的目錄路徑
echo "${directories[@]}" | while IFS= read -r dir;
do
  # 獲取舊目錄名稱
  old_dir_name=$(basename "$dir")

  echo "old_name: $old_dir_name"

  file_name=$(echo "$old_dir_name" | sed 's/\///g')
  echo "before encode: $file_name"
  encode_file_name=$(urlencode "$file_name")
  echo "after encode: $file_name"

  new_dir_name="$counter"

  echo "new_name: $new_dir_name"

  ((counter++))


  # 變更檔案內容的目錄路徑
  #find "$pwd" -type f -name "$old_dir_name.md" -exec sed -i "s/$file_name/$new_dir_name/g" {} \;

echo "file---- $encode_file_name/$new_dir_name"

echo "$file_name.md"

  sed -i '' "s/$encode_file_name/$new_dir_name/g" "$file_name.md"

  # 變更目錄名稱
  mv "$old_dir_name" "$new_dir_name"

  #echo "$counter"

  # 變更檔名
  mv "$file_name.md" "$new_dir_name.md"
  #find "$file_name" -type f -exec sh -c 'mv "$0" "${0%/*}/$new_dir_name.${0##*.}"' {} \;
  echo "change file finish"

done
