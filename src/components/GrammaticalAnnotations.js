import React from 'react';
import Form from './Form';

const GrammaticalAnnotations = () => {
  return (
    <div className="text-left font-small text">
      <div>
        <div><a href="https://alexwarstadt.com/">Alex Warstadt</a> (NYU)</div>
        <div><a href="https://nyu.edu/projects/bowman">Sam Bowman</a> (NYU)</div>
      </div>
      <br/>
      <div>
        <div className="strong">Grammatically Annotated CoLA</div>
        <br/>
        <div>
          <div>
          A grammatically annotated version of the CoLA development set is available here.
          We label each sentence in the CoLA development set with boolean features indicating the presence of absence of
          a particular grammatical construction (usually syntactic in nature).
          Two related sets of features are used: 63 minor features correspond to very fine-grained phenomena, and
          15 major features correspond to broad classes of phenomena. Read the <a href="https://arxiv.org/abs/1901.03438">paper</a>
          for a breakdown of BERT, GPT, and LSTM performance on CoLA by phenomenon, and consult the appendix for
          detailed annotation guidelines.
          Contact alexwarstadt [at] gmail [dot] com with any questions or issues.
          </div>
          <br/>
        </div>

        <div className="strong">Paper <a href="https://arxiv.org/abs/1901.03438"><Description className="icons" /></a></div>
        <br/>
        <div>
          Read the paper at <a href="https://arxiv.org/abs/1901.03438">https://arxiv.org/abs/1901.03438</a>
        </div>
        <br/>

        <div className="strong">Download</div>
        <br/>
        <div>
          Download grammatically annotated CoLA from this <a href="CoLA_grammatical_annotations.zip">link</a>.
        </div>
        <br/>

        <div className="strong">Citation <a href="grammatical_analysis.txt"><Create className="icons" /></a></div>
        <pre className="citation-pre">
          <code>
            @article{warstadt2019grammatical,
              title={Grammatical Analysis of Pretrained Sentence Encoders with Acceptability Judgments},
              author={Warstadt, Alex and Bowman, Samuel R},
              journal={arXiv preprint arXiv:1901.03438},
              year={2019}
            }
          </code>
        </pre>
        <br/>
        <a href="cola.txt">Link</a>
        <br/>
        <br/>


      </div>
    </div>
  );
}

export default GrammaticalAnnotations;
