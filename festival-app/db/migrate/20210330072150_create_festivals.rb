class CreateFestivals < ActiveRecord::Migration[6.1]
  def change
    create_table :festivals do |t|
      t.string :festival_name
      t.string :location
      t.string :start_date
      t.string :end_date
    end
  end
end
