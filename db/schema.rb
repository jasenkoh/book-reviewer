# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141222131540) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_genres", force: :cascade do |t|
    t.integer "genre_id"
    t.integer "book_id"
  end

  add_index "book_genres", ["book_id"], name: "index_book_genres_on_book_id", using: :btree
  add_index "book_genres", ["genre_id"], name: "index_book_genres_on_genre_id", using: :btree

  create_table "books", force: :cascade do |t|
    t.string   "title"
    t.integer  "rating"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "finished_at"
    t.string   "author"
    t.text     "review"
    t.string   "amazon_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "book_genres", "books", on_delete: :cascade
  add_foreign_key "book_genres", "genres", on_delete: :cascade
end
