class AddLinkColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :festivals, :link, :string
  end
end
