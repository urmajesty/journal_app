class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :count, default: 0
      t.references :entry, null: false, foreign_key: true

      t.timestamps
    end
  end
end
