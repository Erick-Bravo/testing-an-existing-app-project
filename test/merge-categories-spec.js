const { expect, assert } = require('chai');

const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {

      //Arange
      const categories = [];
      const tagName = "li"

      //Act
      const result = mergeCategories(template, categories, tagName)

      //Assert
      expect(result).to.include("<div>")
      expect(result).to.include("</div>")
      expect(result).to.include("<ul>")
      expect(result).to.include("</ul>")

      expect(result).to.not.include('<li>')
      expect(result).to.not.include('</li>')


    });

    it("should return a single <li> for one category", () => {
      //arrange
      const categories = ['string']

      //act
      const result = mergeCategories(template, categories, 'li')

      //assert

      expect(result).to.include("<div>")
      expect(result).to.include("</div>")
      expect(result).to.include("<ul>")
      expect(result).to.include("</ul>")
      expect(result).to.include('<li>string</li>')

      expect(result).to.not.include('<!-- Content here -->')

    });

    it("should return an <li> for each category", () => {

      //Arrange
      const categories = ["string1", "string2"];

      //Act
      const result = mergeCategories(template, categories, "li");

      //Assert
      expect(result).to.include("<div>");
      expect(result).to.include("</div>");
      expect(result).to.include("<ul>");
      expect(result).to.include("</ul>");
      expect(result).to.include('<li>string1</li>');
      expect(result).to.include('<li>string2</li>');

      expect(result).to.not.include('<!-- Content here -->')

    });
  });

  context("using <option> tags", () => {

    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;
    const categories = []

    // act
    const result = mergeCategories(template, categories, 'option')



    it("should return no <option>s for no categories", () => {
      // arrange
      const categories = []

      // act
      const result = mergeCategories(template, categories, 'option')

      //assert
      expect(result).to.include("<div>")
      expect(result).to.include("</div>")
      expect(result).to.include("<select>")
      expect(result).to.include("</select>")

      expect(result).to.not.include("<option>")
      expect(result).to.not.include("</option>")

      expect(result).to.not.include('<!-- Content here -->')
    });

    it("should return a single <option> for one category", () => {
      // arrange 
      const categories = ['this']

      // act
      const result = mergeCategories(template, categories, 'option')

      // assert
      expect(result).to.include("<div>")
      expect(result).to.include("</div>")
      expect(result).to.include("<select>")
      expect(result).to.include("</select>")

      expect(result).to.include("<option>this</option>")

      expect(result).to.not.include('<!-- Content here -->')
    });

    it("should return an <option> for each category", () => {
      // arrange 
      const categories = ['this', 'that']
      

      // act 
      const result = mergeCategories(template, categories, 'option')

      // assert
      expect(result).to.include("<div>")
      expect(result).to.include("</div>")
      expect(result).to.include("<select>")
      expect(result).to.include("</select>")

      expect(result).to.include("<option>this</option>")
      expect(result).to.include("<option>that</option>")

      expect(result).to.not.include('<!-- Content here -->')
    });

    
  });
});

