import csv
import uuid

# Read data from products_rows.csv and write to output.csv
with open('/Users/jakobnunnendorf/Github/shop/public/cases/products_rows.csv', 'r') as input_file, open('/Users/jakobnunnendorf/Github/shop/public/cases/output.csv', 'w', newline='') as output_file:
    reader = csv.reader(input_file)
    writer = csv.writer(output_file)

    # Write the header row unmodified
    headers = next(reader)
    writer.writerow(headers)

    # For each row, replace the first column with a new UUID
    for row in reader:
        row[0] = str(uuid.uuid4())
        writer.writerow(row)
